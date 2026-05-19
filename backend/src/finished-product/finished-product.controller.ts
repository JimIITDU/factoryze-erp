import { Controller, Post, Get, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { FinishedProductService } from './finished-product.service';
import { CreateFinishedProductDto } from './dto/create-finished-product.dto';
import { UpdateFinishedProductDto } from './dto/update-finished-product.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('finished-products')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.MANUFACTURER)
export class FinishedProductController {
  constructor(private readonly finishedProductService: FinishedProductService) {}

  @Post()
  create(@Body() dto: CreateFinishedProductDto) {
    return this.finishedProductService.create(dto);
  }

  @Get()
  findAll() {
    return this.finishedProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.finishedProductService.findOne(id);
  }

  @Patch(':id/stock')
  updateStock(@Param('id') id: string, @Body() dto: UpdateFinishedProductDto) {
    return this.finishedProductService.updateStock(id, dto);
  }
}