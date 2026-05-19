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
  @Roles(Role.MANUFACTURER)
  create(@Body() dto: CreateDistributorDto, @Request() req: any) {
    return this.distributorService.create(dto, req.user.id);
  }

  @Get()
  @Roles(Role.MANUFACTURER)
  findAll(@Request() req: any) {
    return this.distributorService.findAll(req.user.id);
  }

  @Get(':id')
  @Roles(Role.MANUFACTURER)
  findOne(@Param('id') id: string) {
    return this.distributorService.findOne(id);
  }
}