import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  UseGuards,
  UseInterceptors,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { OrderTransformInterceptor } from '../common/interceptors/order-transform.interceptor';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

@Controller('orders')
@UseGuards(JwtAuthGuard)
@UseInterceptors(OrderTransformInterceptor)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @CurrentUser() user: User) {
    return this.ordersService.create(createOrderDto, user);
  }

  @Get()
  findAll(
    @Query('restaurantId') restaurantId: string,
    @Query('active') active: string,
    @CurrentUser() user: User,
  ) {
    if (active === 'true') {
      return this.ordersService.findActive(restaurantId, user);
    }
    return this.ordersService.findAll(restaurantId, user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: User) {
    return this.ordersService.findOne(id, user);
  }

  @Patch(':id')
  @Roles(
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN_RESTAURANT,
    UserRole.MANAGER,
    UserRole.SERVEUR,
  )
  @UseGuards(RolesGuard)
  update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
    @CurrentUser() user: User,
  ) {
    return this.ordersService.update(id, updateOrderDto, user);
  }

  @Patch(':orderId/items/:itemId/status')
  @Roles(
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN_RESTAURANT,
    UserRole.MANAGER,
    UserRole.CUISINE,
    UserRole.BAR,
  )
  @UseGuards(RolesGuard)
  updateItemStatus(
    @Param('orderId') orderId: string,
    @Param('itemId') itemId: string,
    @Body('status') status: 'PENDING' | 'IN_PREPARATION' | 'READY' | 'CANCELLED',
    @CurrentUser() user: User,
  ) {
    return this.ordersService.updateItemStatus(orderId, itemId, status, user);
  }
}



