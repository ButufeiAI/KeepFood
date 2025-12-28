import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { TableAssignment } from '../entities/table-assignment.entity';
import { Table } from '../entities/table.entity';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';
import { CreateTableAssignmentDto } from './dto/create-table-assignment.dto';

@Injectable()
export class TableAssignmentsService {
  constructor(
    @InjectRepository(TableAssignment)
    private tableAssignmentsRepository: Repository<TableAssignment>,
    @InjectRepository(Table)
    private tablesRepository: Repository<Table>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async assignTables(createDto: CreateTableAssignmentDto, restaurantId: string, user: User): Promise<TableAssignment[]> {
    // Vérifier les permissions
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    // Vérifier que l'utilisateur est un serveur
    const server = await this.usersRepository.findOne({
      where: { id: createDto.userId, restaurantId },
    });

    if (!server) {
      throw new NotFoundException('Server not found');
    }

    if (server.role !== UserRole.SERVEUR && server.role !== UserRole.MANAGER) {
      throw new BadRequestException('User must be a server or manager');
    }

    // Vérifier que les tables existent et appartiennent au restaurant
    const tables = await this.tablesRepository.find({
      where: {
        id: In(createDto.tableIds),
        restaurantId,
      },
    });

    if (tables.length !== createDto.tableIds.length) {
      throw new NotFoundException('Some tables not found or do not belong to this restaurant');
    }

    // Désactiver les attributions existantes pour ces tables
    await this.tableAssignmentsRepository.update(
      {
        tableId: In(createDto.tableIds),
        isActive: true,
      },
      { isActive: false },
    );

    // Créer les nouvelles attributions
    const assignments: TableAssignment[] = [];

    for (const tableId of createDto.tableIds) {
      const assignment = this.tableAssignmentsRepository.create({
        userId: createDto.userId,
        tableId,
        restaurantId,
        isActive: true,
        startDate: createDto.startDate ? new Date(createDto.startDate) : new Date(),
        endDate: createDto.endDate ? new Date(createDto.endDate) : null,
      });

      assignments.push(assignment);
    }

    return this.tableAssignmentsRepository.save(assignments);
  }

  async getServerTables(userId: string, restaurantId: string, user: User): Promise<Table[]> {
    // Vérifier les permissions
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    if (user.id !== userId && user.role !== UserRole.SUPER_ADMIN && user.role !== UserRole.ADMIN_RESTAURANT && user.role !== UserRole.MANAGER) {
      throw new ForbiddenException('Access denied');
    }

    const assignments = await this.tableAssignmentsRepository.find({
      where: {
        userId,
        restaurantId,
        isActive: true,
      },
      relations: ['table'],
    });

    return assignments.map((a) => a.table);
  }

  async getTableServers(tableId: string, restaurantId: string, user: User): Promise<User[]> {
    // Vérifier les permissions
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    const assignments = await this.tableAssignmentsRepository.find({
      where: {
        tableId,
        restaurantId,
        isActive: true,
      },
      relations: ['user'],
    });

    return assignments.map((a) => a.user);
  }

  async unassignTables(userId: string, tableIds: string[], restaurantId: string, user: User): Promise<void> {
    // Vérifier les permissions
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    await this.tableAssignmentsRepository.update(
      {
        userId,
        tableId: In(tableIds),
        restaurantId,
        isActive: true,
      },
      { isActive: false },
    );
  }

  async getAllAssignments(restaurantId: string, user: User): Promise<TableAssignment[]> {
    // Vérifier les permissions
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    return this.tableAssignmentsRepository.find({
      where: {
        restaurantId,
        isActive: true,
      },
      relations: ['user', 'table'],
    });
  }
}

