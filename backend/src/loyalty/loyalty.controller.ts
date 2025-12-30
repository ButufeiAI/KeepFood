import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/enums/role.enum';
import { LoyaltyService } from './loyalty.service';
import { CreateLoyaltyRewardDto } from './dto/create-loyalty-reward.dto';
import { UpdateLoyaltyRewardDto } from './dto/update-loyalty-reward.dto';
import { UseRewardDto } from './dto/use-reward.dto';

@Controller('loyalty')
@UseGuards(JwtAuthGuard)
export class LoyaltyController {
  constructor(private readonly loyaltyService: LoyaltyService) {}

  // ========== GESTION DES RÉCOMPENSES (Admin/Manager) ==========

  @Post('rewards')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async createReward(@Request() req, @Body() createDto: CreateLoyaltyRewardDto) {
    return await this.loyaltyService.createReward(req.user.restaurantId, createDto);
  }

  @Get('rewards')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async getRewards(@Request() req) {
    return await this.loyaltyService.getRewards(req.user.restaurantId);
  }

  @Get('rewards/:id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async getReward(@Request() req, @Param('id') id: string) {
    return await this.loyaltyService.getReward(req.user.restaurantId, id);
  }

  @Put('rewards/:id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async updateReward(@Request() req, @Param('id') id: string, @Body() updateDto: UpdateLoyaltyRewardDto) {
    return await this.loyaltyService.updateReward(req.user.restaurantId, id, updateDto);
  }

  @Delete('rewards/:id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async deleteReward(@Request() req, @Param('id') id: string) {
    await this.loyaltyService.deleteReward(req.user.restaurantId, id);
    return { message: 'Récompense supprimée' };
  }

  // ========== COMPTE DE FIDÉLITÉ ==========

  @Get('account/:clientId')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async getAccount(@Request() req, @Param('clientId') clientId: string) {
    return await this.loyaltyService.getAccount(req.user.restaurantId, clientId);
  }

  @Get('account')
  async getMyAccount(@Request() req, @Query('clientIdentifier') clientIdentifier: string) {
    if (!clientIdentifier) {
      throw new Error('clientIdentifier est requis');
    }
    const account = await this.loyaltyService.getAccountByClientIdentifier(
      req.user.restaurantId,
      clientIdentifier,
    );
    if (!account) {
      return { points: 0, totalPointsEarned: 0, totalPointsSpent: 0, transactions: [] };
    }
    return account;
  }

  @Get('account/:clientId/transactions')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async getTransactions(@Request() req, @Param('clientId') clientId: string) {
    return await this.loyaltyService.getTransactions(req.user.restaurantId, clientId);
  }

  @Get('rewards/available/:clientId')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async getAvailableRewards(@Request() req, @Param('clientId') clientId: string) {
    return await this.loyaltyService.getAvailableRewards(req.user.restaurantId, clientId);
  }

  @Post('rewards/use')
  async useReward(@Request() req, @Body() useDto: UseRewardDto, @Query('clientIdentifier') clientIdentifier: string) {
    if (!clientIdentifier) {
      throw new Error('clientIdentifier est requis');
    }
    const account = await this.loyaltyService.getAccountByClientIdentifier(
      req.user.restaurantId,
      clientIdentifier,
    );
    if (!account) {
      throw new Error('Compte client non trouvé');
    }
    return await this.loyaltyService.useReward(req.user.restaurantId, account.clientId, useDto);
  }
}

