import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { Product } from '../entities/product.entity';
import { Restaurant } from '../entities/restaurant.entity';
import { Table } from '../entities/table.entity';
import { UserRole } from '../common/enums/role.enum';
import { OrderStatus } from '../common/enums/order-status.enum';
import { OrdersGateway } from './orders.gateway';
import { NotificationsService } from '../notifications/notifications.service';
import { FavoritesService } from '../favorites/favorites.service';

describe('OrdersService', () => {
  let service: OrdersService;
  let ordersRepository: jest.Mocked<Repository<Order>>;
  let orderItemsRepository: jest.Mocked<Repository<OrderItem>>;
  let productsRepository: jest.Mocked<Repository<Product>>;
  let restaurantsRepository: jest.Mocked<Repository<Restaurant>>;
  let tablesRepository: jest.Mocked<Repository<Table>>;

  const mockUser = {
    id: 'user-123',
    email: 'test@example.com',
    role: UserRole.ADMIN_RESTAURANT,
    restaurantId: 'restaurant-123',
  };

  const mockRestaurant = {
    id: 'restaurant-123',
    name: 'Test Restaurant',
  };

  const mockProduct = {
    id: 'product-123',
    name: 'Pizza Margherita',
    price: 12.50,
    isAvailable: true,
    category: { restaurantId: 'restaurant-123' },
  };

  const mockOrder = {
    id: 'order-123',
    restaurantId: 'restaurant-123',
    status: OrderStatus.PENDING,
    totalAmount: 25.00,
    items: [],
  };

  beforeEach(async () => {
    const mockOrdersRepo = {
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
    };

    const mockOrderItemsRepo = {
      create: jest.fn(),
      save: jest.fn(),
    };

    const mockProductsRepo = {
      findOne: jest.fn(),
    };

    const mockRestaurantsRepo = {
      findOne: jest.fn(),
    };

    const mockTablesRepo = {
      findOne: jest.fn(),
    };

    const mockDataSource = {
      createQueryRunner: jest.fn(() => ({
        connect: jest.fn(),
        startTransaction: jest.fn(),
        manager: {
          save: jest.fn(),
        },
        commitTransaction: jest.fn(),
        rollbackTransaction: jest.fn(),
        release: jest.fn(),
      })),
    };

    const mockOrdersGateway = {
      notifyNewOrder: jest.fn(),
      notifyOrderStatusChanged: jest.fn(),
    };

    const mockNotificationsService = {
      notifyOrderReady: jest.fn(),
    };

    const mockFavoritesService = {
      addFavorite: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: getRepositoryToken(Order),
          useValue: mockOrdersRepo,
        },
        {
          provide: getRepositoryToken(OrderItem),
          useValue: mockOrderItemsRepo,
        },
        {
          provide: getRepositoryToken(Product),
          useValue: mockProductsRepo,
        },
        {
          provide: getRepositoryToken(Restaurant),
          useValue: mockRestaurantsRepo,
        },
        {
          provide: getRepositoryToken(Table),
          useValue: mockTablesRepo,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
        {
          provide: OrdersGateway,
          useValue: mockOrdersGateway,
        },
        {
          provide: NotificationsService,
          useValue: mockNotificationsService,
        },
        {
          provide: FavoritesService,
          useValue: mockFavoritesService,
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    ordersRepository = module.get(getRepositoryToken(Order));
    orderItemsRepository = module.get(getRepositoryToken(OrderItem));
    productsRepository = module.get(getRepositoryToken(Product));
    restaurantsRepository = module.get(getRepositoryToken(Restaurant));
    tablesRepository = module.get(getRepositoryToken(Table));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all orders for a restaurant', async () => {
      ordersRepository.find.mockResolvedValue([mockOrder] as any);

      const result = await service.findAll('restaurant-123', mockUser as any);

      expect(ordersRepository.find).toHaveBeenCalledWith({
        where: { restaurantId: 'restaurant-123' },
        relations: ['table', 'user', 'server', 'items', 'items.product'],
        order: { createdAt: 'DESC' },
      });
      expect(result).toEqual([mockOrder]);
    });
  });

  describe('findOne', () => {
    it('should return an order by id', async () => {
      ordersRepository.findOne.mockResolvedValue(mockOrder as any);

      const result = await service.findOne('order-123', mockUser as any);

      expect(ordersRepository.findOne).toHaveBeenCalled();
      expect(result).toEqual(mockOrder);
    });

    it('should throw NotFoundException if order does not exist', async () => {
      ordersRepository.findOne.mockResolvedValue(null);

      await expect(
        service.findOne('nonexistent', mockUser as any),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
