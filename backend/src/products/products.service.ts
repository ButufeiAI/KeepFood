import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Product } from '../entities/product.entity';
import { Category } from '../entities/category.entity';
import { ProductImage } from '../entities/product-image.entity';
import { ProductVariant } from '../entities/product-variant.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    @InjectRepository(ProductImage)
    private productImagesRepository: Repository<ProductImage>,
    @InjectRepository(ProductVariant)
    private productVariantsRepository: Repository<ProductVariant>,
    private dataSource: DataSource,
  ) {}

  async create(createProductDto: CreateProductDto, user: User): Promise<Product> {
    // Vérifier que la catégorie existe et que l'utilisateur y a accès
    const category = await this.categoriesRepository.findOne({
      where: { id: createProductDto.categoryId },
      relations: ['restaurant'],
    });

    if (!category) {
      throw new NotFoundException(
        `Category with ID ${createProductDto.categoryId} not found`,
      );
    }

    await this.checkRestaurantAccess(category.restaurantId, user);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const product = this.productsRepository.create({
        categoryId: createProductDto.categoryId,
        name: createProductDto.name,
        shortDescription: createProductDto.shortDescription,
        fullDescription: createProductDto.fullDescription,
        price: createProductDto.price,
        allergens: createProductDto.allergens,
        tags: createProductDto.tags,
        type: createProductDto.type || 'FOOD',
        isAvailable: createProductDto.isAvailable ?? true,
        displayOrder: createProductDto.displayOrder || 0,
        isActive: true,
      });

      const savedProduct = await queryRunner.manager.save(Product, product);

      // Créer les images
      if (createProductDto.images && createProductDto.images.length > 0) {
        const images = createProductDto.images.map((img, index) =>
          this.productImagesRepository.create({
            productId: savedProduct.id,
            url: img.url,
            isPrimary: img.isPrimary || index === 0,
            displayOrder: img.displayOrder || index,
          }),
        );
        await queryRunner.manager.save(ProductImage, images);
      }

      // Créer les variantes
      if (createProductDto.variants && createProductDto.variants.length > 0) {
        const variants = createProductDto.variants.map((variant) =>
          this.productVariantsRepository.create({
            productId: savedProduct.id,
            name: variant.name,
            priceModifier: variant.priceModifier,
            isAvailable: variant.isAvailable ?? true,
          }),
        );
        await queryRunner.manager.save(ProductVariant, variants);
      }

      await queryRunner.commitTransaction();

      return this.productsRepository.findOne({
        where: { id: savedProduct.id },
        relations: ['category', 'images', 'variants'],
      });
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(categoryId: string, user: User): Promise<Product[]> {
    const category = await this.categoriesRepository.findOne({
      where: { id: categoryId },
      relations: ['restaurant'],
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    await this.checkRestaurantAccess(category.restaurantId, user);

    return this.productsRepository.find({
      where: { categoryId, isActive: true },
      relations: ['images', 'variants'],
      order: { displayOrder: 'ASC', name: 'ASC' },
    });
  }

  async findByRestaurant(restaurantId: string, user: User): Promise<Product[]> {
    await this.checkRestaurantAccess(restaurantId, user);

    return this.productsRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.images', 'images')
      .leftJoinAndSelect('product.variants', 'variants')
      .where('category.restaurantId = :restaurantId', { restaurantId })
      .andWhere('product.isActive = :isActive', { isActive: true })
      .orderBy('category.displayOrder', 'ASC')
      .addOrderBy('product.displayOrder', 'ASC')
      .getMany();
  }

  async findOne(id: string, user: User): Promise<Product> {
    const product = await this.productsRepository.findOne({
      where: { id },
      relations: ['category', 'category.restaurant', 'images', 'variants'],
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    await this.checkRestaurantAccess(product.category.restaurantId, user);

    return product;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
    user: User,
  ): Promise<Product> {
    const product = await this.findOne(id, user);

    Object.assign(product, updateProductDto);
    return this.productsRepository.save(product);
  }

  async remove(id: string, user: User): Promise<void> {
    const product = await this.findOne(id, user);
    product.isActive = false;
    await this.productsRepository.save(product);
  }

  private async checkRestaurantAccess(
    restaurantId: string,
    user: User,
  ): Promise<void> {
    if (user.role === UserRole.SUPER_ADMIN) {
      return;
    }

    if (user.restaurantId !== restaurantId) {
      throw new ForbiddenException(
        'You do not have access to this restaurant',
      );
    }
  }
}



