import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablishmentTypesService } from './establishment-types.service';
import { EstablishmentTypesController } from './establishment-types.controller';
import { EstablishmentType } from '../entities/establishment-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstablishmentType])],
  controllers: [EstablishmentTypesController],
  providers: [EstablishmentTypesService],
  exports: [EstablishmentTypesService],
})
export class EstablishmentTypesModule {}
