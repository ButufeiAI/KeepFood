import {
  Controller,
  Get,
  Patch,
  Param,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import { KitchenService } from './kitchen.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

@Controller('kitchen')
@UseGuards(JwtAuthGuard)
export class KitchenController {
  constructor(private readonly kitchenService: KitchenService) {}

  @Get('orders')
  @Roles(
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN_RESTAURANT,
    UserRole.MANAGER,
    UserRole.CUISINE,
  )
  @UseGuards(RolesGuard)
  getKitchenOrders(
    @Query('restaurantId') restaurantId: string,
    @CurrentUser() user: User,
  ) {
    return this.kitchenService.getKitchenOrders(restaurantId, user);
  }

  @Get('bar/orders')
  @Roles(
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN_RESTAURANT,
    UserRole.MANAGER,
    UserRole.BAR,
  )
  @UseGuards(RolesGuard)
  getBarOrders(
    @Query('restaurantId') restaurantId: string,
    @CurrentUser() user: User,
  ) {
    return this.kitchenService.getBarOrders(restaurantId, user);
  }

  @Patch('items/:itemId/status')
  @Roles(
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN_RESTAURANT,
    UserRole.MANAGER,
    UserRole.CUISINE,
    UserRole.BAR,
  )
  @UseGuards(RolesGuard)
  updateItemStatus(
    @Param('itemId') itemId: string,
    @Body('status') status: 'PENDING' | 'IN_PREPARATION' | 'READY' | 'CANCELLED',
    @CurrentUser() user: User,
  ) {
    return this.kitchenService.updateItemStatus(itemId, status, user);
  }
}



