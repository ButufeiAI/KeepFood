import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PromoCode, PromoCodeType } from '../entities/promo-code.entity';
import { PromoCodeUsage } from '../entities/promo-code-usage.entity';
import { Order } from '../entities/order.entity';
import { Client } from '../entities/client.entity';
import { CreatePromoCodeDto } from './dto/create-promo-code.dto';
import { UpdatePromoCodeDto } from './dto/update-promo-code.dto';
import { ApplyPromoCodeDto } from './dto/apply-promo-code.dto';

@Injectable()
export class MarketingService {
  constructor(
    @InjectRepository(PromoCode)
    private promoCodeRepository: Repository<PromoCode>,
    @InjectRepository(PromoCodeUsage)
    private promoCodeUsageRepository: Repository<PromoCodeUsage>,
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async createPromoCode(restaurantId: string, createDto: CreatePromoCodeDto): Promise<PromoCode> {
    // Vérifier que le code n'existe pas déjà
    const existing = await this.promoCodeRepository.findOne({
      where: { code: createDto.code, restaurantId },
    });
    if (existing) {
      throw new BadRequestException('Ce code promo existe déjà');
    }

    const promoCode = this.promoCodeRepository.create({
      ...createDto,
      restaurantId,
      validFrom: createDto.validFrom ? new Date(createDto.validFrom) : null,
      validUntil: createDto.validUntil ? new Date(createDto.validUntil) : null,
    });

    return await this.promoCodeRepository.save(promoCode);
  }

  async getPromoCodes(restaurantId: string): Promise<PromoCode[]> {
    return await this.promoCodeRepository.find({
      where: { restaurantId },
      order: { createdAt: 'DESC' },
    });
  }

  async getPromoCode(restaurantId: string, id: string): Promise<PromoCode> {
    const promoCode = await this.promoCodeRepository.findOne({
      where: { id, restaurantId },
    });
    if (!promoCode) {
      throw new NotFoundException('Code promo non trouvé');
    }
    return promoCode;
  }

  async updatePromoCode(restaurantId: string, id: string, updateDto: UpdatePromoCodeDto): Promise<PromoCode> {
    const promoCode = await this.getPromoCode(restaurantId, id);
    Object.assign(promoCode, {
      ...updateDto,
      validFrom: updateDto.validFrom ? new Date(updateDto.validFrom) : promoCode.validFrom,
      validUntil: updateDto.validUntil ? new Date(updateDto.validUntil) : promoCode.validUntil,
    });
    return await this.promoCodeRepository.save(promoCode);
  }

  async deletePromoCode(restaurantId: string, id: string): Promise<void> {
    const promoCode = await this.getPromoCode(restaurantId, id);
    await this.promoCodeRepository.remove(promoCode);
  }

  async validatePromoCode(restaurantId: string, code: string, orderAmount: number = 0): Promise<PromoCode> {
    const promoCode = await this.promoCodeRepository.findOne({
      where: { code, restaurantId, isActive: true },
    });

    if (!promoCode) {
      throw new NotFoundException('Code promo invalide ou introuvable');
    }

    const now = new Date();

    // Vérifier les dates de validité
    if (promoCode.validFrom && now < promoCode.validFrom) {
      throw new BadRequestException('Ce code promo n\'est pas encore valide');
    }
    if (promoCode.validUntil && now > promoCode.validUntil) {
      throw new BadRequestException('Ce code promo a expiré');
    }

    // Vérifier le montant minimum
    if (promoCode.minOrderAmount && orderAmount < promoCode.minOrderAmount) {
      throw new BadRequestException(`Montant minimum requis: ${promoCode.minOrderAmount} €`);
    }

    // Vérifier le nombre maximum d'utilisations
    if (promoCode.maxUses && promoCode.usedCount >= promoCode.maxUses) {
      throw new BadRequestException('Ce code promo a atteint son nombre maximum d\'utilisations');
    }

    return promoCode;
  }

  async applyPromoCode(
    restaurantId: string,
    applyDto: ApplyPromoCodeDto,
    orderAmount: number,
  ): Promise<{ promoCode: PromoCode; discountAmount: number }> {
    const promoCode = await this.validatePromoCode(restaurantId, applyDto.code, orderAmount);

    // Vérifier les utilisations par client
    if (applyDto.clientIdentifier && promoCode.maxUsesPerClient) {
      const clientUsageCount = await this.promoCodeUsageRepository.count({
        where: {
          promoCodeId: promoCode.id,
          clientIdentifier: applyDto.clientIdentifier,
        },
      });
      if (clientUsageCount >= promoCode.maxUsesPerClient) {
        throw new BadRequestException('Vous avez déjà utilisé ce code promo le nombre maximum de fois');
      }
    }

    // Calculer le montant de la réduction
    let discountAmount = 0;
    if (promoCode.type === PromoCodeType.PERCENTAGE) {
      discountAmount = (orderAmount * promoCode.discountValue) / 100;
      if (promoCode.maxDiscountAmount) {
        discountAmount = Math.min(discountAmount, promoCode.maxDiscountAmount);
      }
    } else if (promoCode.type === PromoCodeType.FIXED) {
      discountAmount = promoCode.discountValue;
    } else if (promoCode.type === PromoCodeType.FREE_SHIPPING) {
      // Pour la livraison gratuite, on retourne 0 (sera géré dans le calcul de livraison)
      discountAmount = 0;
    }

    // Ne pas dépasser le montant de la commande
    discountAmount = Math.min(discountAmount, orderAmount);

    return { promoCode, discountAmount };
  }

  async recordPromoCodeUsage(
    restaurantId: string,
    promoCodeId: string,
    orderId: string,
    clientId?: string,
    clientIdentifier?: string,
    discountAmount: number = 0,
  ): Promise<PromoCodeUsage> {
    const usage = this.promoCodeUsageRepository.create({
      promoCodeId,
      orderId,
      clientId,
      clientIdentifier,
      discountAmount,
    });

    await this.promoCodeUsageRepository.save(usage);

    // Incrémenter le compteur d'utilisations
    const promoCode = await this.getPromoCode(restaurantId, promoCodeId);
    promoCode.usedCount += 1;
    await this.promoCodeRepository.save(promoCode);

    return usage;
  }

  async getPromoCodeUsage(restaurantId: string, promoCodeId: string): Promise<PromoCodeUsage[]> {
    await this.getPromoCode(restaurantId, promoCodeId); // Vérifier que le code existe
    return await this.promoCodeUsageRepository.find({
      where: { promoCodeId },
      relations: ['order', 'client'],
      order: { usedAt: 'DESC' },
    });
  }
}
