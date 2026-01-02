import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstablishmentType } from '../entities/establishment-type.entity';
import { CreateEstablishmentTypeDto } from './dto/create-establishment-type.dto';
import { UpdateEstablishmentTypeDto } from './dto/update-establishment-type.dto';

@Injectable()
export class EstablishmentTypesService {
  constructor(
    @InjectRepository(EstablishmentType)
    private establishmentTypesRepository: Repository<EstablishmentType>,
  ) {}

  async create(
    createEstablishmentTypeDto: CreateEstablishmentTypeDto,
  ): Promise<EstablishmentType> {
    // Vérifier si le nom existe déjà
    const existing = await this.establishmentTypesRepository.findOne({
      where: { name: createEstablishmentTypeDto.name },
    });

    if (existing) {
      throw new BadRequestException(
        `Un type d'établissement avec le nom "${createEstablishmentTypeDto.name}" existe déjà`,
      );
    }

    const establishmentType = this.establishmentTypesRepository.create({
      ...createEstablishmentTypeDto,
      status: createEstablishmentTypeDto.status || 'ACTIVE',
      isActive: createEstablishmentTypeDto.isActive ?? true,
      displayOrder: createEstablishmentTypeDto.displayOrder ?? 0,
    });

    return this.establishmentTypesRepository.save(establishmentType);
  }

  async findAll(): Promise<EstablishmentType[]> {
    return this.establishmentTypesRepository.find({
      order: { displayOrder: 'ASC', name: 'ASC' },
      relations: ['categories'],
    });
  }

  async findOne(id: string): Promise<EstablishmentType> {
    const establishmentType = await this.establishmentTypesRepository.findOne({
      where: { id },
      relations: ['categories'],
    });

    if (!establishmentType) {
      throw new NotFoundException(
        `Type d'établissement avec l'ID "${id}" introuvable`,
      );
    }

    return establishmentType;
  }

  async update(
    id: string,
    updateEstablishmentTypeDto: UpdateEstablishmentTypeDto,
  ): Promise<EstablishmentType> {
    const establishmentType = await this.findOne(id);

    // Si le nom est modifié, vérifier qu'il n'existe pas déjà
    if (
      updateEstablishmentTypeDto.name &&
      updateEstablishmentTypeDto.name !== establishmentType.name
    ) {
      const existing = await this.establishmentTypesRepository.findOne({
        where: { name: updateEstablishmentTypeDto.name },
      });

      if (existing) {
        throw new BadRequestException(
          `Un type d'établissement avec le nom "${updateEstablishmentTypeDto.name}" existe déjà`,
        );
      }
    }

    Object.assign(establishmentType, updateEstablishmentTypeDto);
    return this.establishmentTypesRepository.save(establishmentType);
  }

  async remove(id: string): Promise<void> {
    const establishmentType = await this.findOne(id);
    await this.establishmentTypesRepository.remove(establishmentType);
  }
}
