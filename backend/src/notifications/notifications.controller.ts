import { Controller, Get, Post, Patch, Query, Body, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('public/notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async getNotifications(
    @Query('clientIdentifier') clientIdentifier: string,
    @Query('restaurantId') restaurantId: string,
    @Query('limit') limit: string,
  ) {
    if (!clientIdentifier || !restaurantId) {
      return [];
    }
    return this.notificationsService.getNotifications(
      clientIdentifier,
      restaurantId,
      limit ? parseInt(limit) : 50,
    );
  }

  @Get('unread-count')
  async getUnreadCount(
    @Query('clientIdentifier') clientIdentifier: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    if (!clientIdentifier || !restaurantId) {
      return { count: 0 };
    }
    const count = await this.notificationsService.getUnreadCount(clientIdentifier, restaurantId);
    return { count };
  }

  @Patch(':id/read')
  async markAsRead(
    @Param('id') id: string,
    @Query('clientIdentifier') clientIdentifier: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    await this.notificationsService.markAsRead(id, clientIdentifier, restaurantId);
    return { message: 'Notification marquée comme lue' };
  }

  @Patch('read-all')
  async markAllAsRead(
    @Query('clientIdentifier') clientIdentifier: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    await this.notificationsService.markAllAsRead(clientIdentifier, restaurantId);
    return { message: 'Toutes les notifications ont été marquées comme lues' };
  }

  @Post('push-token')
  async updatePushToken(
    @Body() body: { clientIdentifier: string; restaurantId: string; pushToken: string },
  ) {
    return this.notificationsService.updatePushToken(
      body.clientIdentifier,
      body.restaurantId,
      body.pushToken,
    );
  }

  @Post('toggle')
  async toggleNotifications(
    @Body() body: { clientIdentifier: string; restaurantId: string; enabled: boolean },
  ) {
    return this.notificationsService.toggleNotifications(
      body.clientIdentifier,
      body.restaurantId,
      body.enabled,
    );
  }
}

