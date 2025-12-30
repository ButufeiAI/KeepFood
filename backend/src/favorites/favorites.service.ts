import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteProduct } from '../entities/favorite-product.entity';
import { Client } from '../entities/client.entity';
import { Product } from '../entities/product.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(FavoriteProduct)
    private favoritesRepository: Repository<FavoriteProduct>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async addFavorite(clientIdentifier: string, restaurantId: string, productId: string): Promise<FavoriteProduct> {
    // Trouver ou créer le client
    let client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      client = this.clientRepository.create({
        identifier: clientIdentifier,
        restaurantId,
        isActive: true,
      });
      client = await this.clientRepository.save(client);
    }

    // Vérifier que le produit existe
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: ['category'],
    });

    if (!product) {
      throw new NotFoundException('Produit non trouvé');
    }

    // Vérifier que le produit appartient au restaurant
    if (product.category.restaurantId !== restaurantId) {
      throw new NotFoundException('Produit non trouvé pour ce restaurant');
    }

    // Vérifier si le favori existe déjà
    let favorite = await this.favoritesRepository.findOne({
      where: { clientId: client.id, productId },
    });

    if (favorite) {
      // Incrémenter le compteur
      favorite.orderCount += 1;
      return await this.favoritesRepository.save(favorite);
    }

    // Créer un nouveau favori
    favorite = this.favoritesRepository.create({
      clientId: client.id,
      productId,
      orderCount: 1,
    });

    return await this.favoritesRepository.save(favorite);
  }

  async removeFavorite(clientIdentifier: string, restaurantId: string, productId: string): Promise<void> {
    const client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      throw new NotFoundException('Client non trouvé');
    }

    const favorite = await this.favoritesRepository.findOne({
      where: { clientId: client.id, productId },
    });

    if (favorite) {
      await this.favoritesRepository.remove(favorite);
    }
  }

  async getFavorites(clientIdentifier: string, restaurantId: string): Promise<FavoriteProduct[]> {
    const client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      return [];
    }

    return await this.favoritesRepository.find({
      where: { clientId: client.id },
      relations: ['product', 'product.category', 'product.images'],
      order: { orderCount: 'DESC', createdAt: 'DESC' },
    });
  }

  async isFavorite(clientIdentifier: string, restaurantId: string, productId: string): Promise<boolean> {
    const client = await this.clientRepository.findOne({
      where: { identifier: clientIdentifier, restaurantId },
    });

    if (!client) {
      return false;
    }

    const favorite = await this.favoritesRepository.findOne({
      where: { clientId: client.id, productId },
    });

    return !!favorite;
  }
}

