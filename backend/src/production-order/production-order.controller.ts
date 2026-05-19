import { Controller, Post, Get, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { ProductionOrderService } from './production-order.service';
import { CreateProductionOrderDto } from './dto/create-production-order.dto';
import { UpdateProductionOrderDto } from './dto/update-production-order.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('production-orders')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.MANUFACTURER)
export class ProductionOrderController {
  constructor(private readonly productionOrderService: ProductionOrderService) {}

  @Post()
  create(@Body() dto: CreateProductionOrderDto) {
    return this.productionOrderService.create(dto);
  }

  @Get()
  findAll() {
    return this.productionOrderService.findAll();
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateProductionOrderDto) {
    return this.productionOrderService.updateStatus(id, dto);
  }
}