import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Invoice } from '../entities/invoice.entity';

@Injectable()
export class PeppolService {
  private readonly logger = new Logger(PeppolService.name);
  private readonly dokapiBaseUrl: string;
  private readonly dokapiApiKey: string;

  constructor(private configService: ConfigService) {
    this.dokapiBaseUrl = this.configService.get<string>('DOKAPI_BASE_URL') || 'https://api.dokapi.com';
    this.dokapiApiKey = this.configService.get<string>('DOKAPI_API_KEY') || '';
  }

  /**
   * Envoie une facture via PEPPOL via l'API Dokapi
   */
  async sendInvoice(invoice: Invoice): Promise<{ success: boolean; documentId?: string; error?: string }> {
    if (!this.dokapiApiKey) {
      this.logger.warn('DOKAPI_API_KEY not configured, skipping PEPPOL send');
      return { success: false, error: 'PEPPOL API key not configured' };
    }

    try {
      // Structure de base pour l'API Dokapi
      // Note: À adapter selon la documentation officielle de Dokapi
      const peppolDocument = {
        documentType: invoice.type === 'INCOME' ? 'INVOICE' : 'INVOICE',
        issueDate: invoice.issueDate,
        dueDate: invoice.dueDate,
        invoiceNumber: invoice.invoiceNumber,
        recipient: {
          name: invoice.recipientName,
          email: invoice.recipientEmail,
          address: invoice.recipientAddress,
          vatNumber: invoice.recipientVatNumber,
        },
        totals: {
          subtotal: invoice.subtotal,
          taxAmount: invoice.taxAmount,
          totalAmount: invoice.totalAmount,
          taxRate: invoice.taxRate,
        },
        description: invoice.description,
        notes: invoice.notes,
      };

      // TODO: Implémenter l'appel HTTP réel à l'API Dokapi
      // const response = await this.httpService.post(
      //   `${this.dokapiBaseUrl}/api/v1/peppol/documents`,
      //   peppolDocument,
      //   { headers: { Authorization: `Bearer ${this.dokapiApiKey}` } }
      // );

      this.logger.log(`PEPPOL document prepared for invoice ${invoice.invoiceNumber}`);
      
      // Pour l'instant, retourner un mock
      return {
        success: true,
        documentId: `PEPPOL-${Date.now()}-${invoice.id.substring(0, 8)}`,
      };
    } catch (error) {
      this.logger.error(`Error sending invoice via PEPPOL: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * Récupère le statut d'un document PEPPOL
   */
  async getDocumentStatus(documentId: string): Promise<any> {
    if (!this.dokapiApiKey) {
      return { error: 'PEPPOL API key not configured' };
    }

    try {
      // TODO: Implémenter l'appel HTTP réel
      // const response = await this.httpService.get(
      //   `${this.dokapiBaseUrl}/api/v1/peppol/documents/${documentId}/status`,
      //   { headers: { Authorization: `Bearer ${this.dokapiApiKey}` } }
      // );

      return { status: 'SENT', documentId };
    } catch (error) {
      this.logger.error(`Error fetching PEPPOL document status: ${error.message}`);
      return { error: error.message };
    }
  }
}

