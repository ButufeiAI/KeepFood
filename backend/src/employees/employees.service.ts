import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { EmployeeProfile } from '../entities/employee-profile.entity';
import { TableAssignment } from '../entities/table-assignment.entity';
import { Table } from '../entities/table.entity';
import * as bcrypt from 'bcrypt';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { AssignTablesDto } from './dto/assign-tables.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(EmployeeProfile)
    private employeeProfilesRepository: Repository<EmployeeProfile>,
    @InjectRepository(TableAssignment)
    private tableAssignmentsRepository: Repository<TableAssignment>,
    @InjectRepository(Table)
    private tablesRepository: Repository<Table>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto, restaurantId: string) {
    // Vérifier si l'email existe déjà
    const existingUser = await this.usersRepository.findOne({
      where: { email: createEmployeeDto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Cet email est déjà utilisé');
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(createEmployeeDto.password, 10);

    // Créer l'utilisateur
    const user = this.usersRepository.create({
      email: createEmployeeDto.email,
      password: hashedPassword,
      firstName: createEmployeeDto.firstName,
      lastName: createEmployeeDto.lastName,
      phone: createEmployeeDto.phone,
      role: createEmployeeDto.role as any,
      restaurantId,
      isActive: true,
    });

    const savedUser = await this.usersRepository.save(user);

    // Créer le profil employé
    const profile = this.employeeProfilesRepository.create({
      userId: savedUser.id,
      hireDate: new Date(createEmployeeDto.hireDate),
      contractType: createEmployeeDto.contractType || 'CDI',
      workSchedule: createEmployeeDto.workSchedule || 'FULL_TIME',
      department: createEmployeeDto.department,
      hourlyRate: createEmployeeDto.hourlyRate,
      monthlySalary: createEmployeeDto.monthlySalary,
    });

    await this.employeeProfilesRepository.save(profile);

    return this.findOne(savedUser.id);
  }

  async findAll(restaurantId: string, role?: string) {
    const query = this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.restaurant', 'restaurant')
      .leftJoin('employee_profiles', 'profile', 'profile.userId = user.id')
      .leftJoin('table_assignments', 'assignments', 'assignments.userId = user.id AND assignments.isActive = true')
      .leftJoin('tables', 'tables', 'tables.id = assignments.tableId')
      .addSelect([
        'profile.id',
        'profile.hireDate',
        'profile.contractType',
        'profile.workSchedule',
        'profile.department',
        'profile.hourlyRate',
        'profile.monthlySalary',
        'profile.performanceRating',
      ])
      .addSelect([
        'assignments.id',
        'assignments.tableId',
        'assignments.isActive',
        'tables.name',
        'tables.zone',
      ])
      .where('user.restaurantId = :restaurantId', { restaurantId })
      .andWhere('user.role != :clientRole', { clientRole: 'CLIENT' });

    if (role) {
      query.andWhere('user.role = :role', { role });
    }

    const users = await query.getMany();

    // Formater les résultats
    return users.map((user: any) => ({
      ...user,
      profile: user.profile_id
        ? {
            id: user.profile_id,
            hireDate: user.profile_hireDate,
            contractType: user.profile_contractType,
            workSchedule: user.profile_workSchedule,
            department: user.profile_department,
            hourlyRate: user.profile_hourlyRate,
            monthlySalary: user.profile_monthlySalary,
            performanceRating: user.profile_performanceRating || 0,
          }
        : undefined,
      assignedTables: user.assignments_id
        ? [
            {
              id: user.assignments_id,
              tableId: user.assignments_tableId,
              tableName: user.tables_name,
              zone: user.tables_zone,
              isActive: user.assignments_isActive,
            },
          ]
        : [],
    }));
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ['restaurant'],
    });

    if (!user) {
      throw new NotFoundException('Employé non trouvé');
    }

    const profile = await this.employeeProfilesRepository.findOne({
      where: { userId: id },
    });

    const assignments = await this.tableAssignmentsRepository.find({
      where: { userId: id, isActive: true },
      relations: ['table'],
    });

    return {
      ...user,
      profile,
      assignedTables: assignments.map((a) => ({
        id: a.id,
        tableId: a.tableId,
        tableName: a.table.name,
        zone: a.table.zone,
        isActive: a.isActive,
      })),
    };
  }

  async update(id: string, updateEmployeeDto: Partial<CreateEmployeeDto>) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Employé non trouvé');
    }

    // Mettre à jour l'utilisateur
    if (updateEmployeeDto.firstName) user.firstName = updateEmployeeDto.firstName;
    if (updateEmployeeDto.lastName) user.lastName = updateEmployeeDto.lastName;
    if (updateEmployeeDto.phone) user.phone = updateEmployeeDto.phone;
    if (updateEmployeeDto.role) user.role = updateEmployeeDto.role as any;

    await this.usersRepository.save(user);

    // Mettre à jour le profil
    let profile = await this.employeeProfilesRepository.findOne({ where: { userId: id } });

    if (profile) {
      if (updateEmployeeDto.hireDate) profile.hireDate = new Date(updateEmployeeDto.hireDate);
      if (updateEmployeeDto.contractType) profile.contractType = updateEmployeeDto.contractType;
      if (updateEmployeeDto.workSchedule) profile.workSchedule = updateEmployeeDto.workSchedule;
      if (updateEmployeeDto.department) profile.department = updateEmployeeDto.department;
      if (updateEmployeeDto.hourlyRate !== undefined) profile.hourlyRate = updateEmployeeDto.hourlyRate;
      if (updateEmployeeDto.monthlySalary !== undefined) profile.monthlySalary = updateEmployeeDto.monthlySalary;

      await this.employeeProfilesRepository.save(profile);
    }

    return this.findOne(id);
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Employé non trouvé');
    }

    await this.usersRepository.remove(user);
    return { message: 'Employé supprimé avec succès' };
  }

  async updateStatus(id: string, isActive: boolean) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Employé non trouvé');
    }

    user.isActive = isActive;
    await this.usersRepository.save(user);

    return this.findOne(id);
  }

  // Attribution des tables
  async assignTables(assignTablesDto: AssignTablesDto, restaurantId: string) {
    const { userId, tableIds } = assignTablesDto;

    // Vérifier que l'utilisateur existe et est un serveur
    const user = await this.usersRepository.findOne({
      where: { id: userId, restaurantId },
    });

    if (!user) {
      throw new NotFoundException('Utilisateur non trouvé');
    }

    if (user.role !== 'SERVEUR') {
      throw new BadRequestException('Seuls les serveurs peuvent être assignés à des tables');
    }

    // Créer les attributions
    const assignments = [];
    for (const tableId of tableIds) {
      const table = await this.tablesRepository.findOne({
        where: { id: tableId, restaurantId },
      });

      if (!table) {
        throw new NotFoundException(`Table ${tableId} non trouvée`);
      }

      const assignment = this.tableAssignmentsRepository.create({
        userId,
        tableId,
        restaurantId,
        isActive: true,
        startDate: new Date(),
      });

      assignments.push(assignment);
    }

    await this.tableAssignmentsRepository.save(assignments);

    return this.findOne(userId);
  }

  async unassignTable(assignmentId: string) {
    const assignment = await this.tableAssignmentsRepository.findOne({
      where: { id: assignmentId },
    });

    if (!assignment) {
      throw new NotFoundException('Attribution non trouvée');
    }

    await this.tableAssignmentsRepository.remove(assignment);

    return { message: 'Table retirée avec succès' };
  }

  async autoAssignTables(restaurantId: string) {
    // Récupérer tous les serveurs actifs
    const waiters = await this.usersRepository.find({
      where: {
        restaurantId,
        role: 'SERVEUR' as any,
        isActive: true,
      },
    });

    if (waiters.length === 0) {
      throw new BadRequestException('Aucun serveur actif disponible');
    }

    // Récupérer toutes les tables actives
    const tables = await this.tablesRepository.find({
      where: { restaurantId, isActive: true },
    });

    if (tables.length === 0) {
      throw new BadRequestException('Aucune table active disponible');
    }

    // Supprimer toutes les attributions existantes
    await this.tableAssignmentsRepository.delete({ restaurantId });

    // Répartir équitablement les tables entre les serveurs
    const tablesPerWaiter = Math.ceil(tables.length / waiters.length);
    let waiterIndex = 0;

    for (let i = 0; i < tables.length; i++) {
      const table = tables[i];
      const waiter = waiters[waiterIndex];

      const assignment = this.tableAssignmentsRepository.create({
        userId: waiter.id,
        tableId: table.id,
        restaurantId,
        isActive: true,
        startDate: new Date(),
      });

      await this.tableAssignmentsRepository.save(assignment);

      // Passer au serveur suivant après avoir attribué le quota de tables
      if ((i + 1) % tablesPerWaiter === 0) {
        waiterIndex++;
      }
    }

    return {
      message: 'Attribution automatique terminée',
      waitersCount: waiters.length,
      tablesCount: tables.length,
    };
  }

  async clearAllAssignments(restaurantId: string) {
    await this.tableAssignmentsRepository.delete({ restaurantId });
    return { message: 'Toutes les attributions ont été supprimées' };
  }
}
