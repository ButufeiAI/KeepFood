import { Controller, Get, Query, Param } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('public/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('orders')
  async getClientOrders(@Query('clientIdentifier') clientIdentifier: string) {
    if (!clientIdentifier) {
      return [];
    }
    return this.clientsService.getClientOrders(clientIdentifier);
  }

  @Get('loyalty')
  async getClientLoyalty(
    @Query('clientIdentifier') clientIdentifier: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    if (!clientIdentifier || !restaurantId) {
      return null;
    }
    return this.clientsService.getClientLoyalty(restaurantId, clientIdentifier);
  }

  @Get('dashboard')
  async getClientDashboard(
    @Query('clientIdentifier') clientIdentifier: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    if (!clientIdentifier) {
      return { orders: [], loyalty: null };
    }
    return this.clientsService.getClientDashboard(restaurantId, clientIdentifier);
  }
}

