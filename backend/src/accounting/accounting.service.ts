import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Invoice, InvoiceStatus, InvoiceType } from '../entities/invoice.entity';
import { Transaction, TransactionType } from '../entities/transaction.entity';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { User } from '../entities/user.entity';
import { PeppolService } from '../peppol/peppol.service';

@Injectable()
export class AccountingService {
  constructor(
    @InjectRepository(Invoice)
    private invoicesRepository: Repository<Invoice>,
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
    private peppolService: PeppolService,
  ) {}

  // ========== INVOICES ==========

  async createInvoice(createInvoiceDto: CreateInvoiceDto, user: User): Promise<Invoice> {
    // Générer un numéro de facture unique
    const invoiceNumber = await this.generateInvoiceNumber(createInvoiceDto.restaurantId, createInvoiceDto.type);

    // Calculer le montant TVA si non fourni
    let taxAmount = createInvoiceDto.taxAmount || 0;
    const taxRate = createInvoiceDto.taxRate || 21;
    if (!createInvoiceDto.taxAmount && createInvoiceDto.subtotal) {
      taxAmount = (createInvoiceDto.subtotal * taxRate) / 100;
    }

    const invoice = this.invoicesRepository.create({
      ...createInvoiceDto,
      invoiceNumber,
      taxAmount,
      taxRate,
      issueDate: new Date(createInvoiceDto.issueDate),
      dueDate: createInvoiceDto.dueDate ? new Date(createInvoiceDto.dueDate) : null,
      status: InvoiceStatus.DRAFT,
      createdById: user.id,
    });

    const savedInvoice = await this.invoicesRepository.save(invoice);

    // Si PEPPOL est activé, envoyer la facture
    if (createInvoiceDto.peppolEnabled && savedInvoice.status === InvoiceStatus.PENDING) {
      const peppolResult = await this.peppolService.sendInvoice(savedInvoice);
      if (peppolResult.success && peppolResult.documentId) {
        savedInvoice.peppolDocumentId = peppolResult.documentId;
        savedInvoice.peppolResponse = JSON.stringify(peppolResult);
        await this.invoicesRepository.save(savedInvoice);
      }
    }

    return savedInvoice;
  }

  async findAllInvoices(restaurantId: string, user: User): Promise<Invoice[]> {
    return this.invoicesRepository.find({
      where: { restaurantId },
      relations: ['createdBy'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOneInvoice(id: string, restaurantId: string): Promise<Invoice> {
    const invoice = await this.invoicesRepository.findOne({
      where: { id, restaurantId },
      relations: ['createdBy', 'transactions'],
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    return invoice;
  }

  async updateInvoiceStatus(id: string, restaurantId: string, status: InvoiceStatus): Promise<Invoice> {
    const invoice = await this.findOneInvoice(id, restaurantId);
    invoice.status = status;
    
    if (status === InvoiceStatus.PENDING && invoice.peppolEnabled && !invoice.peppolDocumentId) {
      const peppolResult = await this.peppolService.sendInvoice(invoice);
      if (peppolResult.success && peppolResult.documentId) {
        invoice.peppolDocumentId = peppolResult.documentId;
        invoice.peppolResponse = JSON.stringify(peppolResult);
      }
    }

    return this.invoicesRepository.save(invoice);
  }

  private async generateInvoiceNumber(restaurantId: string, type: InvoiceType): Promise<string> {
    const prefix = type === InvoiceType.INCOME ? 'INV' : 'EXP';
    const year = new Date().getFullYear();
    const count = await this.invoicesRepository.count({
      where: {
        restaurantId,
        type,
        issueDate: Between(new Date(`${year}-01-01`), new Date(`${year}-12-31`)),
      },
    });
    
    return `${prefix}-${year}-${String(count + 1).padStart(4, '0')}`;
  }

  // ========== TRANSACTIONS ==========

  async createTransaction(createTransactionDto: CreateTransactionDto, user: User): Promise<Transaction> {
    const transaction = this.transactionsRepository.create({
      ...createTransactionDto,
      date: new Date(createTransactionDto.date),
      createdById: user.id,
    });

    return this.transactionsRepository.save(transaction);
  }

  async findAllTransactions(restaurantId: string, startDate?: Date, endDate?: Date): Promise<Transaction[]> {
    const where: any = { restaurantId };
    
    if (startDate && endDate) {
      where.date = Between(startDate, endDate);
    }

    return this.transactionsRepository.find({
      where,
      relations: ['createdBy', 'invoice', 'payment'],
      order: { date: 'DESC', createdAt: 'DESC' },
    });
  }

  async getAccountingSummary(restaurantId: string, startDate: Date, endDate: Date) {
    const transactions = await this.findAllTransactions(restaurantId, startDate, endDate);
    
    const income = transactions
      .filter(t => t.type === TransactionType.INCOME)
      .reduce((sum, t) => sum + Number(t.amount), 0);
    
    const expenses = transactions
      .filter(t => t.type === TransactionType.EXPENSE)
      .reduce((sum, t) => sum + Number(t.amount), 0);

    return {
      income,
      expenses,
      net: income - expenses,
      transactionCount: transactions.length,
    };
  }
}

