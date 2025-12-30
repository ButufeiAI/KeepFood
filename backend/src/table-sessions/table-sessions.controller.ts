import { Controller, Get, Post, Param, Body, Patch } from '@nestjs/common';
import { TableSessionsService } from './table-sessions.service';

@Controller('table-sessions')
export class TableSessionsController {
  constructor(private readonly tableSessionsService: TableSessionsService) {}

  @Post('table/:tableId/restaurant/:restaurantId')
  async getOrCreateActiveSession(
    @Param('tableId') tableId: string,
    @Param('restaurantId') restaurantId: string,
  ) {
    return this.tableSessionsService.getOrCreateActiveSession(tableId, restaurantId);
  }

  @Get(':id')
  async getSessionWithOrders(@Param('id') id: string) {
    return this.tableSessionsService.getSessionWithOrders(id);
  }

  @Patch(':id/close')
  async closeSession(
    @Param('id') id: string,
    @Body('markAsPaid') markAsPaid?: boolean,
  ) {
    return this.tableSessionsService.closeSession(id, markAsPaid || false);
  }

  @Get('table/:tableId/active')
  async getActiveSessionsByTable(@Param('tableId') tableId: string) {
    return this.tableSessionsService.getActiveSessionsByTable(tableId);
  }
}

