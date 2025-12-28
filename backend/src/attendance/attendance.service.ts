import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from '../entities/attendance.entity';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';
import { CreateAttendanceDto } from './dto/create-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private attendanceRepository: Repository<Attendance>,
  ) {}

  async checkIn(userId: string, user: User): Promise<Attendance> {
    // Vérifier les permissions
    if (user.role !== UserRole.SUPER_ADMIN && user.id !== userId && user.restaurantId !== user.restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Vérifier si un pointage existe déjà pour aujourd'hui
    let attendance = await this.attendanceRepository.findOne({
      where: {
        userId,
        date: today,
      },
    });

    if (attendance && attendance.checkIn) {
      throw new ForbiddenException('Check-in already recorded for today');
    }

    if (!attendance) {
      attendance = this.attendanceRepository.create({
        userId,
        restaurantId: user.restaurantId!,
        date: today,
        checkIn: new Date(),
      });
    } else {
      attendance.checkIn = new Date();
    }

    return this.attendanceRepository.save(attendance);
  }

  async checkOut(userId: string, user: User): Promise<Attendance> {
    // Vérifier les permissions
    if (user.role !== UserRole.SUPER_ADMIN && user.id !== userId && user.restaurantId !== user.restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const attendance = await this.attendanceRepository.findOne({
      where: {
        userId,
        date: today,
      },
    });

    if (!attendance || !attendance.checkIn) {
      throw new NotFoundException('No check-in found for today');
    }

    if (attendance.checkOut) {
      throw new ForbiddenException('Check-out already recorded for today');
    }

    attendance.checkOut = new Date();

    // Calculer les minutes travaillées
    const diff = attendance.checkOut.getTime() - attendance.checkIn.getTime();
    attendance.totalMinutes = Math.floor(diff / (1000 * 60));

    return this.attendanceRepository.save(attendance);
  }

  async getMyAttendance(userId: string, startDate?: Date, endDate?: Date): Promise<Attendance[]> {
    const query = this.attendanceRepository
      .createQueryBuilder('attendance')
      .where('attendance.userId = :userId', { userId })
      .orderBy('attendance.date', 'DESC');

    if (startDate) {
      query.andWhere('attendance.date >= :startDate', { startDate });
    }

    if (endDate) {
      query.andWhere('attendance.date <= :endDate', { endDate });
    }

    return query.getMany();
  }

  async getRestaurantAttendance(
    restaurantId: string,
    user: User,
    startDate?: Date,
    endDate?: Date,
  ): Promise<Attendance[]> {
    // Vérifier les permissions
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    const query = this.attendanceRepository
      .createQueryBuilder('attendance')
      .leftJoinAndSelect('attendance.user', 'user')
      .where('attendance.restaurantId = :restaurantId', { restaurantId })
      .orderBy('attendance.date', 'DESC');

    if (startDate) {
      query.andWhere('attendance.date >= :startDate', { startDate });
    }

    if (endDate) {
      query.andWhere('attendance.date <= :endDate', { endDate });
    }

    return query.getMany();
  }

  async getTodayStatus(userId: string): Promise<{ isCheckedIn: boolean; attendance?: Attendance }> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const attendance = await this.attendanceRepository.findOne({
      where: {
        userId,
        date: today,
      },
    });

    return {
      isCheckedIn: !!attendance?.checkIn,
      attendance: attendance || undefined,
    };
  }

  /**
   * Approuve un pointage (admin seulement)
   */
  async approveAttendance(attendanceId: string, adminUser: User, notes?: string): Promise<Attendance> {
    // Vérifier que l'utilisateur est admin ou manager
    if (
      adminUser.role !== UserRole.SUPER_ADMIN &&
      adminUser.role !== UserRole.ADMIN_RESTAURANT &&
      adminUser.role !== UserRole.MANAGER
    ) {
      throw new ForbiddenException('Only admins and managers can approve attendance');
    }

    const attendance = await this.attendanceRepository.findOne({
      where: { id: attendanceId },
      relations: ['user'],
    });

    if (!attendance) {
      throw new NotFoundException('Attendance not found');
    }

    // Vérifier que l'attendance appartient au même restaurant
    if (adminUser.role !== UserRole.SUPER_ADMIN && adminUser.restaurantId !== attendance.restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    attendance.approvalStatus = 'APPROVED';
    attendance.approvedById = adminUser.id;
    attendance.approvedAt = new Date();
    if (notes) {
      attendance.notes = notes;
    }

    return this.attendanceRepository.save(attendance);
  }

  /**
   * Rejette un pointage (admin seulement)
   */
  async rejectAttendance(attendanceId: string, adminUser: User, rejectionReason: string): Promise<Attendance> {
    // Vérifier que l'utilisateur est admin ou manager
    if (
      adminUser.role !== UserRole.SUPER_ADMIN &&
      adminUser.role !== UserRole.ADMIN_RESTAURANT &&
      adminUser.role !== UserRole.MANAGER
    ) {
      throw new ForbiddenException('Only admins and managers can reject attendance');
    }

    const attendance = await this.attendanceRepository.findOne({
      where: { id: attendanceId },
      relations: ['user'],
    });

    if (!attendance) {
      throw new NotFoundException('Attendance not found');
    }

    // Vérifier que l'attendance appartient au même restaurant
    if (adminUser.role !== UserRole.SUPER_ADMIN && adminUser.restaurantId !== attendance.restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    attendance.approvalStatus = 'REJECTED';
    attendance.approvedById = adminUser.id;
    attendance.approvedAt = new Date();
    attendance.rejectionReason = rejectionReason;

    return this.attendanceRepository.save(attendance);
  }

  /**
   * Récupère tous les pointages en attente d'approbation
   */
  async getPendingApprovals(restaurantId: string, user: User): Promise<Attendance[]> {
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    return this.attendanceRepository.find({
      where: {
        restaurantId,
        approvalStatus: 'PENDING',
      },
      relations: ['user', 'approvedBy'],
      order: { date: 'DESC', createdAt: 'DESC' },
    });
  }
}

