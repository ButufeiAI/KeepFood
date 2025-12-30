import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription, SubscriptionStatus, SubscriptionType } from '../entities/subscription.entity';
import { SubscriptionUsage } from '../entities/subscription-usage.entity';
import { Client } from '../entities/client.entity';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { UseSubscriptionDto } from './dto/use-subscription.dto';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>,
    @InjectRepository(SubscriptionUsage)
    private subscriptionUsageRepository: Repository<SubscriptionUsage>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async create(restaurantId: string, createDto: CreateSubscriptionDto): Promise<Subscription> {
    const client = await this.clientRepository.findOne({
      where: { id: createDto.clientId, restaurantId },
    });

    if (!client) {
      throw new NotFoundException('Client non trouvé');
    }

    const subscription = this.subscriptionsRepository.create({
      restaurantId,
      clientId: createDto.clientId,
      type: createDto.type,
      price: createDto.price,
      startDate: new Date(createDto.startDate),
      endDate: createDto.endDate ? new Date(createDto.endDate) : null,
      totalMeals: createDto.totalMeals,
      consumedMeals: 0,
      mealsPerWeek: createDto.mealsPerWeek || null,
      preferredDays: createDto.preferredDays ? JSON.stringify(createDto.preferredDays) : null,
      isRecurring: createDto.isRecurring || false,
      paymentMethodId: createDto.paymentMethodId || null,
      status: SubscriptionStatus.ACTIVE,
    });

    return await this.subscriptionsRepository.save(subscription);
  }

  async findAll(restaurantId: string): Promise<Subscription[]> {
    return await this.subscriptionsRepository.find({
      where: { restaurantId },
      relations: ['client'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(restaurantId: string, id: string): Promise<Subscription> {
    const subscription = await this.subscriptionsRepository.findOne({
      where: { id, restaurantId },
      relations: ['client', 'usages', 'usages.order'],
    });

    if (!subscription) {
      throw new NotFoundException('Abonnement non trouvé');
    }

    return subscription;
  }

  async findByClient(restaurantId: string, clientId: string): Promise<Subscription[]> {
    return await this.subscriptionsRepository.find({
      where: { restaurantId, clientId },
      relations: ['client'],
      order: { createdAt: 'DESC' },
    });
  }

  async update(restaurantId: string, id: string, updateDto: UpdateSubscriptionDto): Promise<Subscription> {
    const subscription = await this.findOne(restaurantId, id);

    if (updateDto.startDate) {
      subscription.startDate = new Date(updateDto.startDate);
    }
    if (updateDto.endDate !== undefined) {
      subscription.endDate = updateDto.endDate ? new Date(updateDto.endDate) : null;
    }
    if (updateDto.preferredDays) {
      subscription.preferredDays = JSON.stringify(updateDto.preferredDays);
    }
    if (updateDto.pauseStartDate) {
      subscription.pauseStartDate = new Date(updateDto.pauseStartDate);
    }
    if (updateDto.pauseEndDate !== undefined) {
      subscription.pauseEndDate = updateDto.pauseEndDate ? new Date(updateDto.pauseEndDate) : null;
    }
    if (updateDto.status) {
      subscription.status = updateDto.status;
    }
    if (updateDto.consumedMeals !== undefined) {
      subscription.consumedMeals = updateDto.consumedMeals;
    }
    if (updateDto.price !== undefined) {
      subscription.price = updateDto.price;
    }
    if (updateDto.totalMeals !== undefined) {
      subscription.totalMeals = updateDto.totalMeals;
    }
    if (updateDto.mealsPerWeek !== undefined) {
      subscription.mealsPerWeek = updateDto.mealsPerWeek;
    }
    if (updateDto.isRecurring !== undefined) {
      subscription.isRecurring = updateDto.isRecurring;
    }
    if (updateDto.paymentMethodId !== undefined) {
      subscription.paymentMethodId = updateDto.paymentMethodId;
    }
    if (updateDto.pauseReason !== undefined) {
      subscription.pauseReason = updateDto.pauseReason;
    }

    // Si on met en pause, mettre le statut à PAUSED
    if (updateDto.pauseStartDate && !updateDto.pauseEndDate) {
      subscription.status = SubscriptionStatus.PAUSED;
    }
    // Si on termine la pause, remettre à ACTIVE
    if (updateDto.pauseEndDate && subscription.status === SubscriptionStatus.PAUSED) {
      subscription.status = SubscriptionStatus.ACTIVE;
    }

    return await this.subscriptionsRepository.save(subscription);
  }

  async delete(restaurantId: string, id: string): Promise<void> {
    const subscription = await this.findOne(restaurantId, id);
    await this.subscriptionsRepository.remove(subscription);
  }

  async useSubscription(restaurantId: string, useDto: UseSubscriptionDto): Promise<SubscriptionUsage> {
    const subscription = await this.findOne(restaurantId, useDto.subscriptionId);

    // Vérifier que l'abonnement est actif
    if (subscription.status !== SubscriptionStatus.ACTIVE) {
      throw new BadRequestException('L\'abonnement n\'est pas actif');
    }

    // Vérifier qu'il reste des repas
    if (subscription.consumedMeals >= subscription.totalMeals) {
      throw new BadRequestException('Tous les repas ont été consommés');
    }

    // Vérifier la date de pause
    const now = useDto.usageDate ? new Date(useDto.usageDate) : new Date();
    if (subscription.pauseStartDate && subscription.pauseEndDate) {
      if (now >= subscription.pauseStartDate && now <= subscription.pauseEndDate) {
        throw new BadRequestException('L\'abonnement est en pause');
      }
    }

    // Créer l'utilisation
    const usage = this.subscriptionUsageRepository.create({
      subscriptionId: subscription.id,
      orderId: useDto.orderId || null,
      usageDate: now,
      notes: useDto.notes || null,
    });

    await this.subscriptionUsageRepository.save(usage);

    // Incrémenter le nombre de repas consommés
    subscription.consumedMeals += 1;
    await this.subscriptionsRepository.save(subscription);

    return usage;
  }

  async pauseSubscription(restaurantId: string, id: string, startDate: Date, endDate: Date | null, reason?: string): Promise<Subscription> {
    const subscription = await this.findOne(restaurantId, id);

    subscription.status = SubscriptionStatus.PAUSED;
    subscription.pauseStartDate = startDate;
    subscription.pauseEndDate = endDate;
    subscription.pauseReason = reason || null;

    return await this.subscriptionsRepository.save(subscription);
  }

  async resumeSubscription(restaurantId: string, id: string): Promise<Subscription> {
    const subscription = await this.findOne(restaurantId, id);

    subscription.status = SubscriptionStatus.ACTIVE;
    subscription.pauseEndDate = new Date();
    subscription.pauseReason = null;

    return await this.subscriptionsRepository.save(subscription);
  }

  async getUsageHistory(restaurantId: string, subscriptionId: string): Promise<SubscriptionUsage[]> {
    await this.findOne(restaurantId, subscriptionId); // Vérifier que l'abonnement existe

    return await this.subscriptionUsageRepository.find({
      where: { subscriptionId },
      relations: ['order'],
      order: { usageDate: 'DESC' },
    });
  }
}

