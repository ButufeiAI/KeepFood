import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { TableSession, TableSessionStatus } from '../entities/table-session.entity';
import { Order } from '../entities/order.entity';
import { Table } from '../entities/table.entity';
import { Restaurant } from '../entities/restaurant.entity';

@Injectable()
export class TableSessionsService {
  constructor(
    @InjectRepository(TableSession)
    private tableSessionsRepository: Repository<TableSession>,
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Table)
    private tablesRepository: Repository<Table>,
    @InjectRepository(Restaurant)
    private restaurantsRepository: Repository<Restaurant>,
    private dataSource: DataSource,
  ) {}

  /**
   * Créer ou récupérer une session active pour une table
   */
  async getOrCreateActiveSession(tableId: string, restaurantId: string): Promise<TableSession> {
    // Vérifier que la table existe
    const table = await this.tablesRepository.findOne({
      where: { id: tableId, restaurantId },
    });

    if (!table) {
      throw new NotFoundException('Table not found');
    }

    // Chercher une session active existante
    const existingSession = await this.tableSessionsRepository.findOne({
      where: {
        tableId,
        restaurantId,
        status: TableSessionStatus.ACTIVE,
      },
      relations: ['orders'],
    });

    if (existingSession) {
      return existingSession;
    }

    // Créer une nouvelle session
    const newSession = this.tableSessionsRepository.create({
      tableId,
      restaurantId,
      status: TableSessionStatus.ACTIVE,
      totalAmount: 0,
      isPaid: false,
    });

    return this.tableSessionsRepository.save(newSession);
  }

  /**
   * Récupérer une session avec ses commandes
   */
  async getSessionWithOrders(sessionId: string): Promise<TableSession> {
    const session = await this.tableSessionsRepository.findOne({
      where: { id: sessionId },
      relations: ['orders', 'orders.items', 'orders.user', 'table', 'restaurant'],
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    // Calculer le total à jour
    const orders = await this.ordersRepository.find({
      where: { tableSessionId: sessionId },
    });

    session.totalAmount = orders.reduce((sum, order) => sum + Number(order.totalAmount), 0);

    return session;
  }

  /**
   * Fermer une session (marquer comme payée ou fermée)
   */
  async closeSession(sessionId: string, markAsPaid: boolean = false): Promise<TableSession> {
    const session = await this.tableSessionsRepository.findOne({
      where: { id: sessionId },
      relations: ['orders'],
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    if (session.status !== TableSessionStatus.ACTIVE) {
      throw new BadRequestException('Session is not active');
    }

    session.status = markAsPaid ? TableSessionStatus.PAID : TableSessionStatus.CLOSED;
    session.isPaid = markAsPaid;
    session.closedAt = new Date();

    // Marquer toutes les commandes comme payées si la session est payée
    if (markAsPaid) {
      await this.ordersRepository.update(
        { tableSessionId: sessionId },
        { isPaid: true },
      );
    }

    return this.tableSessionsRepository.save(session);
  }

  /**
   * Obtenir toutes les sessions actives d'une table
   */
  async getActiveSessionsByTable(tableId: string): Promise<TableSession[]> {
    return this.tableSessionsRepository.find({
      where: {
        tableId,
        status: TableSessionStatus.ACTIVE,
      },
      relations: ['orders'],
      order: { createdAt: 'DESC' },
    });
  }

  /**
   * Mettre à jour le total d'une session (appelé après chaque commande)
   */
  async updateSessionTotal(sessionId: string): Promise<void> {
    const orders = await this.ordersRepository.find({
      where: { tableSessionId: sessionId },
    });

    const total = orders.reduce((sum, order) => sum + Number(order.totalAmount), 0);

    await this.tableSessionsRepository.update(sessionId, { totalAmount: total });
  }
}

