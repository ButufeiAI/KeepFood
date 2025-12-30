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
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { UseSubscriptionDto } from './dto/use-subscription.dto';

@Controller('subscriptions')
@UseGuards(JwtAuthGuard)
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async create(@Request() req, @Body() createDto: CreateSubscriptionDto) {
    return await this.subscriptionsService.create(req.user.restaurantId, createDto);
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async findAll(@Request() req) {
    return await this.subscriptionsService.findAll(req.user.restaurantId);
  }

  @Get('client/:clientId')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async findByClient(@Request() req, @Param('clientId') clientId: string) {
    return await this.subscriptionsService.findByClient(req.user.restaurantId, clientId);
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async findOne(@Request() req, @Param('id') id: string) {
    return await this.subscriptionsService.findOne(req.user.restaurantId, id);
  }

  @Put(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async update(@Request() req, @Param('id') id: string, @Body() updateDto: UpdateSubscriptionDto) {
    return await this.subscriptionsService.update(req.user.restaurantId, id, updateDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async delete(@Request() req, @Param('id') id: string) {
    await this.subscriptionsService.delete(req.user.restaurantId, id);
    return { message: 'Abonnement supprimé' };
  }

  @Post('use')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async useSubscription(@Request() req, @Body() useDto: UseSubscriptionDto) {
    return await this.subscriptionsService.useSubscription(req.user.restaurantId, useDto);
  }

  @Post(':id/pause')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async pauseSubscription(
    @Request() req,
    @Param('id') id: string,
    @Body() body: { startDate: string; endDate?: string; reason?: string },
  ) {
    return await this.subscriptionsService.pauseSubscription(
      req.user.restaurantId,
      id,
      new Date(body.startDate),
      body.endDate ? new Date(body.endDate) : null,
      body.reason,
    );
  }

  @Post(':id/resume')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async resumeSubscription(@Request() req, @Param('id') id: string) {
    return await this.subscriptionsService.resumeSubscription(req.user.restaurantId, id);
  }

  @Get(':id/usage')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER, UserRole.SERVEUR)
  async getUsageHistory(@Request() req, @Param('id') id: string) {
    return await this.subscriptionsService.getUsageHistory(req.user.restaurantId, id);
  }
}

