import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientNotification, NotificationType } from '../entities/client-notification.entity';
import { Client } from '../entities/client.entity';
import { Order } from '../entities/order.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(ClientNotification)
    private notificationsRepository: Repository<ClientNotification>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async createNotification(
    clientIdentifier: string,
    restaurantId: string,
    type: NotificationType,
    title: string,
    message: string,
    orderId?: string,
    data?: any,
  ): Promise<ClientNotification> {
    // Trouver ou créer le client
    let client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      client = this.clientRepository.create({
        identifier: clientIdentifier,
        restaurantId,
        isActive: true,
        notificationsEnabled: true,
      });
      client = await this.clientRepository.save(client);
    }

    // Vérifier si les notifications sont activées
    if (!client.notificationsEnabled) {
      return null as any; // Ne pas créer de notification si désactivées
    }

    const notification = this.notificationsRepository.create({
      clientId: client.id,
      type,
      title,
      message,
      orderId,
      data,
      read: false,
    });

    const saved = await this.notificationsRepository.save(notification);

    // TODO: Envoyer une notification push réelle (FCM, Web Push, etc.)
    // await this.sendPushNotification(client, notification);

    return saved;
  }

  async notifyOrderReady(order: Order): Promise<void> {
    if (!order.clientIdentifier) {
      return;
    }

    await this.createNotification(
      order.clientIdentifier,
      order.restaurantId,
      NotificationType.ORDER_READY,
      'Votre commande est prête ! 🎉',
      `Votre commande #${order.id.substring(0, 8)} est prête à être récupérée.`,
      order.id,
      { orderId: order.id, tableId: order.tableId },
    );
  }

  async notifyOrderConfirmed(order: Order): Promise<void> {
    if (!order.clientIdentifier) {
      return;
    }

    await this.createNotification(
      order.clientIdentifier,
      order.restaurantId,
      NotificationType.ORDER_CONFIRMED,
      'Commande confirmée ✅',
      `Votre commande #${order.id.substring(0, 8)} a été confirmée et est en préparation.`,
      order.id,
      { orderId: order.id },
    );
  }

  async notifyPromotion(
    clientIdentifier: string,
    restaurantId: string,
    title: string,
    message: string,
    promotionData?: any,
  ): Promise<void> {
    await this.createNotification(
      clientIdentifier,
      restaurantId,
      NotificationType.PROMOTION,
      title,
      message,
      undefined,
      promotionData,
    );
  }

  async getNotifications(
    clientIdentifier: string,
    restaurantId: string,
    limit: number = 50,
  ): Promise<ClientNotification[]> {
    const client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      return [];
    }

    return await this.notificationsRepository.find({
      where: { clientId: client.id },
      relations: ['order'],
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }

  async markAsRead(notificationId: string, clientIdentifier: string, restaurantId: string): Promise<void> {
    const client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      return;
    }

    const notification = await this.notificationsRepository.findOne({
      where: { id: notificationId, clientId: client.id },
    });

    if (notification) {
      notification.read = true;
      await this.notificationsRepository.save(notification);
    }
  }

  async markAllAsRead(clientIdentifier: string, restaurantId: string): Promise<void> {
    const client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      return;
    }

    await this.notificationsRepository.update(
      { clientId: client.id, read: false },
      { read: true },
    );
  }

  async getUnreadCount(clientIdentifier: string, restaurantId: string): Promise<number> {
    const client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      return 0;
    }

    return await this.notificationsRepository.count({
      where: { clientId: client.id, read: false },
    });
  }

  async updatePushToken(
    clientIdentifier: string,
    restaurantId: string,
    pushToken: string,
  ): Promise<Client> {
    let client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      client = this.clientRepository.create({
        identifier: clientIdentifier,
        restaurantId,
        isActive: true,
        notificationsEnabled: true,
        pushToken,
      });
      return await this.clientRepository.save(client);
    }

    client.pushToken = pushToken;
    client.notificationsEnabled = true;
    return await this.clientRepository.save(client);
  }

  async toggleNotifications(
    clientIdentifier: string,
    restaurantId: string,
    enabled: boolean,
  ): Promise<Client> {
    const client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      throw new Error('Client non trouvé');
    }

    client.notificationsEnabled = enabled;
    return await this.clientRepository.save(client);
  }
}

