import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZoneAssignment } from '../entities/zone-assignment.entity';
import { ZoneAssignmentsService } from './zone-assignments.service';
import { ZoneAssignmentsController } from './zone-assignments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ZoneAssignment])],
  controllers: [ZoneAssignmentsController],
  providers: [ZoneAssignmentsService],
  exports: [ZoneAssignmentsService],
})
export class ZoneAssignmentsModule {}
