import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Table } from '../entities/table.entity';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private tablesRepository: Repository<Table>,
  ) {}

  async create(createTableDto: CreateTableDto, user: User): Promise<Table> {
    // Vérifier que l'utilisateur a accès au restaurant
    await this.checkRestaurantAccess(createTableDto.restaurantId, user);

    const table = this.tablesRepository.create({
      ...createTableDto,
      capacity: createTableDto.capacity || 4,
      isActive: createTableDto.isActive ?? true,
    });

    // Sauvegarder d'abord pour obtenir l'ID
    const savedTable = await this.tablesRepository.save(table);
    
    // Générer l'URL du QR code si non fournie
    if (!savedTable.qrCode) {
      const clientUrl = process.env.CLIENT_URL || 'http://localhost:5203';
      savedTable.qrCode = `${clientUrl}/order?tableId=${savedTable.id}&restaurantId=${savedTable.restaurantId}`;
      return this.tablesRepository.save(savedTable);
    }
    
    return savedTable;
  }

  async findAll(restaurantId: string, user: User): Promise<Table[]> {
    await this.checkRestaurantAccess(restaurantId, user);

    return this.tablesRepository.find({
      where: { restaurantId, isActive: true },
      order: { name: 'ASC' },
    });
  }

  async findOne(id: string, user: User): Promise<Table> {
    const table = await this.tablesRepository.findOne({
      where: { id },
      relations: ['restaurant'],
    });

    if (!table) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }

    await this.checkRestaurantAccess(table.restaurantId, user);

    return table;
  }

  async update(
    id: string,
    updateTableDto: UpdateTableDto,
    user: User,
  ): Promise<Table> {
    const table = await this.findOne(id, user);

    Object.assign(table, updateTableDto);
    return this.tablesRepository.save(table);
  }

  async remove(id: string, user: User): Promise<void> {
    const table = await this.findOne(id, user);
    await this.tablesRepository.remove(table);
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



