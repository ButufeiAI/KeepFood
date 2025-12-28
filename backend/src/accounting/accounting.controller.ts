import { Controller, Get, Post, Body, Param, Patch, Query, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/enums/role.enum';
import { AccountingService } from './accounting.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InvoiceStatus } from '../entities/invoice.entity';

@Controller('accounting')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AccountingController {
  constructor(private readonly accountingService: AccountingService) {}

  @Post('invoices')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async createInvoice(@Body() createInvoiceDto: CreateInvoiceDto, @Request() req) {
    return this.accountingService.createInvoice(createInvoiceDto, req.user);
  }

  @Get('invoices')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async findAllInvoices(@Query('restaurantId') restaurantId: string, @Request() req) {
    return this.accountingService.findAllInvoices(restaurantId, req.user);
  }

  @Get('invoices/:id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async findOneInvoice(@Param('id') id: string, @Query('restaurantId') restaurantId: string) {
    return this.accountingService.findOneInvoice(id, restaurantId);
  }

  @Patch('invoices/:id/status')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async updateInvoiceStatus(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
    @Body('status') status: InvoiceStatus,
  ) {
    return this.accountingService.updateInvoiceStatus(id, restaurantId, status);
  }

  @Post('transactions')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto, @Request() req) {
    return this.accountingService.createTransaction(createTransactionDto, req.user);
  }

  @Get('transactions')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async findAllTransactions(
    @Query('restaurantId') restaurantId: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate ? new Date(startDate) : undefined;
    const end = endDate ? new Date(endDate) : undefined;
    return this.accountingService.findAllTransactions(restaurantId, start, end);
  }

  @Get('summary')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getAccountingSummary(
    @Query('restaurantId') restaurantId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.accountingService.getAccountingSummary(
      restaurantId,
      new Date(startDate),
      new Date(endDate),
    );
  }
}

