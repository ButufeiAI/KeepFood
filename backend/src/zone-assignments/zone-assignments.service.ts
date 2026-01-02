import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ZoneAssignment } from '../entities/zone-assignment.entity';
import { CreateZoneAssignmentDto, UpdateZoneAssignmentDto } from './zone-assignments.dto';

@Injectable()
export class ZoneAssignmentsService {
  constructor(
    @InjectRepository(ZoneAssignment)
    private zoneAssignmentRepository: Repository<ZoneAssignment>,
  ) {}

  async findAll(restaurantId: string): Promise<ZoneAssignment[]> {
    return this.zoneAssignmentRepository.find({
      where: { restaurantId },
      relations: ['employee'],
      order: { zone: 'ASC' },
    });
  }

  async findByZone(restaurantId: string, zone: string): Promise<ZoneAssignment[]> {
    return this.zoneAssignmentRepository.find({
      where: { restaurantId, zone, isActive: true },
      relations: ['employee'],
    });
  }

  async findByEmployee(employeeId: string): Promise<ZoneAssignment[]> {
    return this.zoneAssignmentRepository.find({
      where: { employeeId, isActive: true },
      relations: ['employee'],
    });
  }

  async create(createDto: CreateZoneAssignmentDto): Promise<ZoneAssignment> {
    const assignment = this.zoneAssignmentRepository.create(createDto);
    return this.zoneAssignmentRepository.save(assignment);
  }

  async update(id: string, updateDto: UpdateZoneAssignmentDto): Promise<ZoneAssignment> {
    const assignment = await this.zoneAssignmentRepository.findOne({ where: { id } });
    if (!assignment) {
      throw new NotFoundException(`Zone assignment with ID ${id} not found`);
    }
    Object.assign(assignment, updateDto);
    return this.zoneAssignmentRepository.save(assignment);
  }

  async remove(id: string): Promise<void> {
    const result = await this.zoneAssignmentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Zone assignment with ID ${id} not found`);
    }
  }

  async removeByZone(restaurantId: string, zone: string): Promise<void> {
    await this.zoneAssignmentRepository.delete({ restaurantId, zone });
  }

  async assignMultipleEmployeesToZone(
    restaurantId: string,
    zone: string,
    employeeIds: string[],
  ): Promise<ZoneAssignment[]> {
    // Supprimer les anciennes attributions pour cette zone
    await this.removeByZone(restaurantId, zone);

    // Créer les nouvelles attributions
    const assignments = employeeIds.map((employeeId) =>
      this.zoneAssignmentRepository.create({
        zone,
        employeeId,
        restaurantId,
        isActive: true,
      }),
    );

    return this.zoneAssignmentRepository.save(assignments);
  }
}
