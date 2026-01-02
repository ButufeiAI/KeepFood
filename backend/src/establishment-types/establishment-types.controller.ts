import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { EstablishmentTypesService } from './establishment-types.service';
import { CreateEstablishmentTypeDto } from './dto/create-establishment-type.dto';
import { UpdateEstablishmentTypeDto } from './dto/update-establishment-type.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/enums/role.enum';

@Controller('establishment-types')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EstablishmentTypesController {
  constructor(
    private readonly establishmentTypesService: EstablishmentTypesService,
  ) {}

  @Post()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createEstablishmentTypeDto: CreateEstablishmentTypeDto) {
    return this.establishmentTypesService.create(createEstablishmentTypeDto);
  }

  @Get()
  findAll() {
    return this.establishmentTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.establishmentTypesService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT)
  update(
    @Param('id') id: string,
    @Body() updateEstablishmentTypeDto: UpdateEstablishmentTypeDto,
  ) {
    return this.establishmentTypesService.update(id, updateEstablishmentTypeDto);
  }

  @Delete(':id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.establishmentTypesService.remove(id);
  }
}
