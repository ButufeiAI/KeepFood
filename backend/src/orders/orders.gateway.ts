import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*', // En production, spécifier les origines autorisées
    credentials: true,
  },
})
export class OrdersGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(OrdersGateway.name);

  handleConnection(client: Socket) {
    this.logger.log(`Client connecté: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client déconnecté: ${client.id}`);
  }

  @SubscribeMessage('joinOrder')
  handleJoinOrder(
    @ConnectedSocket() client: Socket,
    @MessageBody() orderId: string,
  ) {
    client.join(`order-${orderId}`);
    this.logger.log(`Client ${client.id} a rejoint la commande ${orderId}`);
    
    // Confirmer la connexion
    client.emit('orderJoined', { orderId, message: 'Suivi activé' });
  }

  @SubscribeMessage('leaveOrder')
  handleLeaveOrder(
    @ConnectedSocket() client: Socket,
    @MessageBody() orderId: string,
  ) {
    client.leave(`order-${orderId}`);
    this.logger.log(`Client ${client.id} a quitté la commande ${orderId}`);
  }

  @SubscribeMessage('joinRestaurant')
  handleJoinRestaurant(
    @ConnectedSocket() client: Socket,
    @MessageBody() restaurantId: string,
  ) {
    client.join(`restaurant-${restaurantId}`);
    this.logger.log(`Client ${client.id} a rejoint le restaurant ${restaurantId}`);
  }

  @SubscribeMessage('leaveRestaurant')
  handleLeaveRestaurant(
    @ConnectedSocket() client: Socket,
    @MessageBody() restaurantId: string,
  ) {
    client.leave(`restaurant-${restaurantId}`);
    this.logger.log(`Client ${client.id} a quitté le restaurant ${restaurantId}`);
  }

  /**
   * Notifier une mise à jour de commande
   */
  notifyOrderUpdate(orderId: string, status: string, message?: string) {
    this.logger.log(`Émission orderUpdate pour commande ${orderId}: ${status}`);
    
    this.server.to(`order-${orderId}`).emit('orderUpdate', {
      orderId,
      status,
      message: message || this.getDefaultMessage(status),
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * Notifier un changement de statut
   */
  notifyOrderStatusChanged(orderId: string, status: string, message?: string) {
    this.logger.log(`Émission orderStatusChanged pour commande ${orderId}: ${status}`);
    
    this.server.to(`order-${orderId}`).emit('orderStatusChanged', {
      status,
      message: message || this.getDefaultMessage(status),
    });
  }

  /**
   * Notifier tous les clients d'un restaurant
   */
  notifyRestaurant(restaurantId: string, event: string, data: any) {
    this.logger.log(`Émission ${event} pour restaurant ${restaurantId}`);
    this.server.to(`restaurant-${restaurantId}`).emit(event, data);
  }

  /**
   * Notifier qu'une nouvelle commande a été créée
   */
  notifyNewOrder(restaurantId: string, order: any) {
    this.logger.log(`Nouvelle commande pour restaurant ${restaurantId}: ${order.id}`);
    this.server.to(`restaurant-${restaurantId}`).emit('newOrder', {
      order,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * Notifier que la nourriture est prête (pour les serveurs)
   */
  notifyFoodReady(restaurantId: string, orderId: string, tableNumber?: string) {
    this.logger.log(`Nourriture prête - Restaurant ${restaurantId}, Commande ${orderId}`);
    
    this.server.to(`restaurant-${restaurantId}`).emit('foodReady', {
      orderId,
      tableNumber,
      message: `Commande ${orderId.substring(0, 8)} prête !`,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * Messages par défaut selon le statut
   */
  private getDefaultMessage(status: string): string {
    const messages: Record<string, string> = {
      PENDING: 'Votre commande a été reçue',
      IN_PREPARATION: 'Votre commande est en préparation',
      READY: 'Votre commande est prête !',
      COMPLETED: 'Votre commande a été servie',
      PAID: 'Paiement effectué avec succès',
      CANCELLED: 'Votre commande a été annulée',
    };
    return messages[status] || 'Mise à jour de statut';
  }
}

