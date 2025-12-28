import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(
    createCategoryDto: CreateCategoryDto,
    user: User,
  ): Promise<Category> {
    await this.checkRestaurantAccess(createCategoryDto.restaurantId, user);

    const category = this.categoriesRepository.create({
      ...createCategoryDto,
      displayOrder: createCategoryDto.displayOrder || 0,
      isActive: createCategoryDto.isActive ?? true,
    });

    return this.categoriesRepository.save(category);
  }

  async findAll(restaurantId: string, user: User): Promise<Category[]> {
    await this.checkRestaurantAccess(restaurantId, user);

    return this.categoriesRepository.find({
      where: { restaurantId, isActive: true },
      relations: ['products'],
      order: { displayOrder: 'ASC', name: 'ASC' },
    });
  }

  async findOne(id: string, user: User): Promise<Category> {
    const category = await this.categoriesRepository.findOne({
      where: { id },
      relations: ['restaurant', 'products'],
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    await this.checkRestaurantAccess(category.restaurantId, user);

    return category;
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
    user: User,
  ): Promise<Category> {
    const category = await this.findOne(id, user);

    Object.assign(category, updateCategoryDto);
    return this.categoriesRepository.save(category);
  }

  async remove(id: string, user: User): Promise<void> {
    const category = await this.findOne(id, user);
    await this.categoriesRepository.remove(category);
  }

  async initializeDefaultCategories(restaurantId: string, user: User): Promise<Category[]> {
    await this.checkRestaurantAccess(restaurantId, user);

    // Vérifier si des catégories existent déjà
    const existingCategories = await this.categoriesRepository.find({
      where: { restaurantId },
    });

    if (existingCategories.length > 0) {
      throw new BadRequestException('Des catégories existent déjà pour ce restaurant');
    }

    const { DEFAULT_MAIN_CATEGORIES, DEFAULT_SUBCATEGORIES } = require('./dto/default-categories.dto');
    const createdCategories: Category[] = [];
    const categoryMap: Record<string, Category> = {};

    // Créer les catégories principales
    for (const mainCat of DEFAULT_MAIN_CATEGORIES) {
      const category = this.categoriesRepository.create({
        restaurantId,
        name: mainCat.name,
        description: mainCat.description,
        displayOrder: mainCat.displayOrder,
        image: mainCat.image,
        isActive: true,
      });
      const saved = await this.categoriesRepository.save(category);
      createdCategories.push(saved);
      categoryMap[mainCat.name] = saved;
    }

    // Créer les sous-catégories
    for (const [mainCatName, subCats] of Object.entries(DEFAULT_SUBCATEGORIES)) {
      const parentCategory = categoryMap[mainCatName];
      if (parentCategory && Array.isArray(subCats)) {
        for (const subCat of subCats) {
          const category = this.categoriesRepository.create({
            restaurantId,
            name: subCat.name,
            description: subCat.description,
            parentCategoryId: parentCategory.id,
            displayOrder: subCat.displayOrder,
            image: subCat.image,
            isActive: true,
          });
          const saved = await this.categoriesRepository.save(category);
          createdCategories.push(saved);
        }
      }
    }

    return createdCategories;
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



