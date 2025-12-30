import { Controller, Get, Post, Delete, Query, Param, UseGuards } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('public/favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  async getFavorites(
    @Query('clientIdentifier') clientIdentifier: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    if (!clientIdentifier || !restaurantId) {
      return [];
    }
    return this.favoritesService.getFavorites(clientIdentifier, restaurantId);
  }

  @Get(':productId/check')
  async checkFavorite(
    @Param('productId') productId: string,
    @Query('clientIdentifier') clientIdentifier: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    if (!clientIdentifier || !restaurantId) {
      return { isFavorite: false };
    }
    const isFavorite = await this.favoritesService.isFavorite(clientIdentifier, restaurantId, productId);
    return { isFavorite };
  }

  @Post(':productId')
  async addFavorite(
    @Param('productId') productId: string,
    @Query('clientIdentifier') clientIdentifier: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    if (!clientIdentifier || !restaurantId) {
      throw new Error('clientIdentifier et restaurantId sont requis');
    }
    return this.favoritesService.addFavorite(clientIdentifier, restaurantId, productId);
  }

  @Delete(':productId')
  async removeFavorite(
    @Param('productId') productId: string,
    @Query('clientIdentifier') clientIdentifier: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    if (!clientIdentifier || !restaurantId) {
      throw new Error('clientIdentifier et restaurantId sont requis');
    }
    await this.favoritesService.removeFavorite(clientIdentifier, restaurantId, productId);
    return { message: 'Favori supprimé' };
  }
}

