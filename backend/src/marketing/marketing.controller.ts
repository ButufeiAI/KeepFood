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
import { MarketingService } from './marketing.service';
import { CreatePromoCodeDto } from './dto/create-promo-code.dto';
import { UpdatePromoCodeDto } from './dto/update-promo-code.dto';
import { ApplyPromoCodeDto } from './dto/apply-promo-code.dto';

@Controller('marketing')
@UseGuards(JwtAuthGuard)
export class MarketingController {
  constructor(private readonly marketingService: MarketingService) {}

  // ========== GESTION DES CODES PROMO (Admin) ==========

  @Post('promo-codes')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async createPromoCode(@Request() req, @Body() createDto: CreatePromoCodeDto) {
    return await this.marketingService.createPromoCode(req.user.restaurantId, createDto);
  }

  @Get('promo-codes')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async getPromoCodes(@Request() req) {
    return await this.marketingService.getPromoCodes(req.user.restaurantId);
  }

  @Get('promo-codes/:id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async getPromoCode(@Request() req, @Param('id') id: string) {
    return await this.marketingService.getPromoCode(req.user.restaurantId, id);
  }

  @Put('promo-codes/:id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async updatePromoCode(@Request() req, @Param('id') id: string, @Body() updateDto: UpdatePromoCodeDto) {
    return await this.marketingService.updatePromoCode(req.user.restaurantId, id, updateDto);
  }

  @Delete('promo-codes/:id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async deletePromoCode(@Request() req, @Param('id') id: string) {
    await this.marketingService.deletePromoCode(req.user.restaurantId, id);
    return { message: 'Code promo supprimé' };
  }

  // ========== VALIDATION ET APPLICATION ==========

  @Post('promo-codes/validate')
  async validatePromoCode(
    @Request() req,
    @Body() body: { code: string; orderAmount?: number },
  ) {
    return await this.marketingService.validatePromoCode(
      req.user.restaurantId,
      body.code,
      body.orderAmount || 0,
    );
  }

  @Post('promo-codes/apply')
  async applyPromoCode(
    @Request() req,
    @Body() applyDto: ApplyPromoCodeDto & { orderAmount: number },
  ) {
    return await this.marketingService.applyPromoCode(
      req.user.restaurantId,
      applyDto,
      applyDto.orderAmount,
    );
  }

  @Get('promo-codes/:id/usage')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getPromoCodeUsage(@Request() req, @Param('id') id: string) {
    return await this.marketingService.getPromoCodeUsage(req.user.restaurantId, id);
  }
}
