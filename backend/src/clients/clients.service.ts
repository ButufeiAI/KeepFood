import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { LoyaltyAccount } from '../entities/loyalty-account.entity';
import { LoyaltyTransaction } from '../entities/loyalty-transaction.entity';
import { Client } from '../entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(LoyaltyAccount)
    private loyaltyAccountRepository: Repository<LoyaltyAccount>,
    @InjectRepository(LoyaltyTransaction)
    private loyaltyTransactionRepository: Repository<LoyaltyTransaction>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async getClientOrders(clientIdentifier: string): Promise<Order[]> {
    return this.ordersRepository.find({
      where: { clientIdentifier },
      relations: ['restaurant', 'items', 'items.product', 'items.variant', 'table'],
      order: { createdAt: 'DESC' },
      take: 50, // Limiter à 50 dernières commandes
    });
  }

  async getClientLoyalty(restaurantId: string, clientIdentifier: string) {
    const client = await this.clientRepository.findOne({
      where: { restaurantId, identifier: clientIdentifier },
    });

    if (!client) {
      return null;
    }

    const account = await this.loyaltyAccountRepository.findOne({
      where: { restaurantId, clientId: client.id },
      relations: ['client'],
    });

    if (!account) {
      return {
        points: 0,
        totalPointsEarned: 0,
        transactions: [],
      };
    }

    const transactions = await this.loyaltyTransactionRepository.find({
      where: { loyaltyAccountId: account.id },
      relations: ['order'],
      order: { createdAt: 'DESC' },
      take: 20, // 20 dernières transactions
    });

    return {
      points: account.points,
      totalPointsEarned: account.totalPointsEarned,
      transactions: transactions.map((t) => ({
        id: t.id,
        type: t.type,
        points: t.points,
        balanceAfter: t.balanceAfter,
        description: t.description,
        createdAt: t.createdAt,
        orderId: t.orderId,
      })),
    };
  }

  async getClientDashboard(restaurantId: string, clientIdentifier: string) {
    const orders = await this.getClientOrders(clientIdentifier);
    const loyalty = await this.getClientLoyalty(restaurantId, clientIdentifier);

    // Filtrer les commandes pour ce restaurant si restaurantId est fourni
    const filteredOrders = restaurantId
      ? orders.filter((order) => order.restaurantId === restaurantId)
      : orders;

    return {
      orders: filteredOrders,
      loyalty,
    };
  }

  async getOrCreateClient(
    identifier: string,
    restaurantId: string,
    name?: string,
  ): Promise<Client> {
    let client = await this.clientRepository.findOne({
      where: { identifier, restaurantId },
    });

    if (!client) {
      client = this.clientRepository.create({
        identifier,
        restaurantId,
        name: name || null,
        isActive: true,
      });
      client = await this.clientRepository.save(client);
    }

    return client;
  }

  async getClientByIdentifier(restaurantId: string, clientIdentifier: string): Promise<Client | null> {
    return await this.clientRepository.findOne({
      where: { restaurantId, identifier: clientIdentifier },
    });
  }
}
