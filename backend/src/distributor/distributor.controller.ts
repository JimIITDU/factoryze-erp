import { Controller, Post, Get, Body, Param, UseGuards, Request } from '@nestjs/common';
import { DistributorService } from './distributor.service';
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('distributors')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DistributorController {
  constructor(private readonly distributorService: DistributorService) {}

  @Post()
  create(@Body() dto: CreateDistributorDto) {
    return this.distributorService.create(dto);
  }

  @Get()
  @Roles(Role.MANUFACTURER)
  findAll() {
    return this.distributorService.findAll();
  }

  @Get(':id')
  @Roles(Role.MANUFACTURER)
  findOne(@Param('id') id: string) {
    return this.distributorService.findOne(id);
  }
}