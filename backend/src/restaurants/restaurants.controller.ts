import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

@Controller('restaurants')
@UseGuards(JwtAuthGuard)
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get('vat/verify')
  async verifyVat(@Query('vatNumber') vatNumber: string) {
    if (!vatNumber) {
      throw new BadRequestException('Le numéro de TVA est requis');
    }
    try {
      return await this.restaurantsService.verifyVatNumber(vatNumber);
    } catch (error: any) {
      // Logger l'erreur pour le debug
      console.error('Erreur dans verifyVat controller:', error);
      throw error;
    }
  }

  @Post()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT)
  @UseGuards(RolesGuard)
  async create(
    @Body() createRestaurantDto: CreateRestaurantDto,
    @CurrentUser() user: User,
  ) {
    try {
      console.log('=== DÉBUT CRÉATION RESTAURANT ===');
      console.log('DTO:', JSON.stringify(createRestaurantDto, null, 2));
      console.log('User:', { id: user.id, email: user.email, role: user.role });
      const result = await this.restaurantsService.create(createRestaurantDto, user);
      console.log('=== RESTAURANT CRÉÉ AVEC SUCCÈS ===');
      return result;
    } catch (error: any) {
      console.error('=== ERREUR DANS CREATE CONTROLLER ===');
      console.error('Type:', error.constructor?.name);
      console.error('Message:', error.message);
      console.error('Status:', error.status || error.statusCode);
      console.error('Stack:', error.stack);
      console.error('===================================');
      throw error;
    }
  }

  @Get()
  findAll(@CurrentUser() user: User) {
    return this.restaurantsService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: User) {
    return this.restaurantsService.findOne(id, user);
  }

  @Patch(':id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  @UseGuards(RolesGuard)
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
    @CurrentUser() user: User,
  ) {
    return this.restaurantsService.update(id, updateRestaurantDto, user);
  }

  @Delete(':id')
  @Roles(UserRole.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string, @CurrentUser() user: User) {
    return this.restaurantsService.remove(id, user);
  }

  @Post('cleanup')
  @Roles(UserRole.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  async cleanup(@CurrentUser() user: User) {
    return this.restaurantsService.cleanup();
  }
}
