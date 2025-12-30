import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoyaltyAccount } from '../entities/loyalty-account.entity';
import { LoyaltyTransaction, LoyaltyTransactionType } from '../entities/loyalty-transaction.entity';
import { LoyaltyReward } from '../entities/loyalty-reward.entity';
import { Client } from '../entities/client.entity';
import { Order } from '../entities/order.entity';
import { CreateLoyaltyRewardDto } from './dto/create-loyalty-reward.dto';
import { UpdateLoyaltyRewardDto } from './dto/update-loyalty-reward.dto';
import { UseRewardDto } from './dto/use-reward.dto';

@Injectable()
export class LoyaltyService {
  constructor(
    @InjectRepository(LoyaltyAccount)
    private loyaltyAccountRepository: Repository<LoyaltyAccount>,
    @InjectRepository(LoyaltyTransaction)
    private loyaltyTransactionRepository: Repository<LoyaltyTransaction>,
    @InjectRepository(LoyaltyReward)
    private loyaltyRewardRepository: Repository<LoyaltyReward>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  // ========== GESTION DES RÉCOMPENSES (Admin) ==========

  async createReward(restaurantId: string, createDto: CreateLoyaltyRewardDto): Promise<LoyaltyReward> {
    const reward = this.loyaltyRewardRepository.create({
      ...createDto,
      restaurantId,
    });
    return await this.loyaltyRewardRepository.save(reward);
  }

  async getRewards(restaurantId: string): Promise<LoyaltyReward[]> {
    return await this.loyaltyRewardRepository.find({
      where: { restaurantId },
      order: { pointsRequired: 'ASC' },
    });
  }

  async getReward(restaurantId: string, rewardId: string): Promise<LoyaltyReward> {
    const reward = await this.loyaltyRewardRepository.findOne({
      where: { id: rewardId, restaurantId },
    });
    if (!reward) {
      throw new NotFoundException('Récompense non trouvée');
    }
    return reward;
  }

  async updateReward(restaurantId: string, rewardId: string, updateDto: UpdateLoyaltyRewardDto): Promise<LoyaltyReward> {
    const reward = await this.getReward(restaurantId, rewardId);
    Object.assign(reward, updateDto);
    return await this.loyaltyRewardRepository.save(reward);
  }

  async deleteReward(restaurantId: string, rewardId: string): Promise<void> {
    const reward = await this.getReward(restaurantId, rewardId);
    await this.loyaltyRewardRepository.remove(reward);
  }

  // ========== GESTION DES COMPTES DE FIDÉLITÉ ==========

  async getOrCreateAccount(restaurantId: string, clientId: string): Promise<LoyaltyAccount> {
    let account = await this.loyaltyAccountRepository.findOne({
      where: { restaurantId, clientId },
      relations: ['client'],
    });

    if (!account) {
      const client = await this.clientRepository.findOne({ where: { id: clientId } });
      if (!client) {
        throw new NotFoundException('Client non trouvé');
      }
      account = this.loyaltyAccountRepository.create({
        restaurantId,
        clientId,
        points: 0,
        totalPointsEarned: 0,
        totalPointsSpent: 0,
      });
      account = await this.loyaltyAccountRepository.save(account);
      account.client = client;
    }

    return account;
  }

  async getAccount(restaurantId: string, clientId: string): Promise<LoyaltyAccount> {
    const account = await this.loyaltyAccountRepository.findOne({
      where: { restaurantId, clientId },
      relations: ['client', 'transactions'],
      order: { transactions: { createdAt: 'DESC' } },
    });
    if (!account) {
      throw new NotFoundException('Compte de fidélité non trouvé');
    }
    return account;
  }

  async getAccountByClientIdentifier(restaurantId: string, clientIdentifier: string): Promise<LoyaltyAccount | null> {
    const client = await this.clientRepository.findOne({
      where: { restaurantId, identifier: clientIdentifier },
    });
    if (!client) {
      return null;
    }
    return await this.getOrCreateAccount(restaurantId, client.id);
  }

  // ========== ACCUMULATION DE POINTS ==========

  async addPoints(
    restaurantId: string,
    clientIdOrIdentifier: string,
    points: number,
    orderId?: string,
    description?: string,
  ): Promise<LoyaltyAccount> {
    // Si c'est un identifiant client (UUID généré côté client), trouver le client
    let clientId = clientIdOrIdentifier;
    const client = await this.clientRepository.findOne({
      where: { restaurantId, identifier: clientIdOrIdentifier },
    });
    if (client) {
      clientId = client.id;
    }
    
    const account = await this.getOrCreateAccount(restaurantId, clientId);

    // Créer la transaction
    const transaction = this.loyaltyTransactionRepository.create({
      loyaltyAccountId: account.id,
      type: LoyaltyTransactionType.EARNED,
      points,
      description: description || `Points gagnés${orderId ? ` pour la commande ${orderId}` : ''}`,
      orderId,
      balanceAfter: account.points + points,
    });

    // Mettre à jour le compte
    account.points += points;
    account.totalPointsEarned += points;

    await this.loyaltyTransactionRepository.save(transaction);
    return await this.loyaltyAccountRepository.save(account);
  }

  // Calculer les points à partir du montant de la commande
  // Exemple: 1 point par euro dépensé
  async calculatePointsFromOrder(order: Order): Promise<number> {
    // Règle par défaut: 1 point par euro (arrondi)
    const totalAmount = parseFloat(order.totalAmount.toString());
    return Math.floor(totalAmount);
  }

  // ========== UTILISATION DE RÉCOMPENSES ==========

  async useReward(restaurantId: string, clientId: string, useDto: UseRewardDto): Promise<{ account: LoyaltyAccount; reward: LoyaltyReward }> {
    const reward = await this.getReward(restaurantId, useDto.rewardId);

    // Vérifier que la récompense est active et valide
    if (!reward.isActive) {
      throw new BadRequestException('Cette récompense n\'est plus active');
    }

    const now = new Date();
    if (reward.validFrom && now < reward.validFrom) {
      throw new BadRequestException('Cette récompense n\'est pas encore disponible');
    }
    if (reward.validUntil && now > reward.validUntil) {
      throw new BadRequestException('Cette récompense a expiré');
    }

    const account = await this.getOrCreateAccount(restaurantId, clientId);

    // Vérifier que le client a assez de points
    if (account.points < reward.pointsRequired) {
      throw new BadRequestException(`Points insuffisants. Nécessaire: ${reward.pointsRequired}, Disponible: ${account.points}`);
    }

    // Vérifier le nombre maximum d'utilisations
    if (reward.maxUsesPerClient) {
      const usesCount = await this.loyaltyTransactionRepository.count({
        where: {
          loyaltyAccountId: account.id,
          type: LoyaltyTransactionType.SPENT,
          description: `Utilisation de la récompense: ${reward.name}`,
        },
      });
      if (usesCount >= reward.maxUsesPerClient) {
        throw new BadRequestException('Nombre maximum d\'utilisations atteint pour cette récompense');
      }
    }

    // Déduire les points
    account.points -= reward.pointsRequired;
    account.totalPointsSpent += reward.pointsRequired;

    // Créer la transaction
    const transaction = this.loyaltyTransactionRepository.create({
      loyaltyAccountId: account.id,
      type: LoyaltyTransactionType.SPENT,
      points: -reward.pointsRequired,
      description: `Utilisation de la récompense: ${reward.name}`,
      orderId: useDto.orderId,
      balanceAfter: account.points,
    });

    await this.loyaltyTransactionRepository.save(transaction);
    const updatedAccount = await this.loyaltyAccountRepository.save(account);

    return { account: updatedAccount, reward };
  }

  // ========== HISTORIQUE DES TRANSACTIONS ==========

  async getTransactions(restaurantId: string, clientId: string): Promise<LoyaltyTransaction[]> {
    const account = await this.getAccount(restaurantId, clientId);
    return await this.loyaltyTransactionRepository.find({
      where: { loyaltyAccountId: account.id },
      relations: ['order'],
      order: { createdAt: 'DESC' },
      take: 50, // Limiter à 50 dernières transactions
    });
  }

  // ========== RÉCOMPENSES DISPONIBLES POUR UN CLIENT ==========

  async getAvailableRewards(restaurantId: string, clientId: string): Promise<LoyaltyReward[]> {
    const account = await this.getOrCreateAccount(restaurantId, clientId);
    const now = new Date();

    const rewards = await this.loyaltyRewardRepository.find({
      where: {
        restaurantId,
        isActive: true,
      },
    });

    // Filtrer les récompenses disponibles (points suffisants + dates valides)
    return rewards.filter((reward) => {
      if (account.points < reward.pointsRequired) return false;
      if (reward.validFrom && now < reward.validFrom) return false;
      if (reward.validUntil && now > reward.validUntil) return false;
      return true;
    });
  }
}

