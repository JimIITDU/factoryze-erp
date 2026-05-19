import { Controller, Post, Get, Patch, Body, Param, UseGuards, Request } from '@nestjs/common';
import { PurchaseOrderService } from './purchase-order.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('purchase-orders')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PurchaseOrderController {
  constructor(private readonly purchaseOrderService: PurchaseOrderService) {}

  @Post()
  @Roles(Role.MANUFACTURER)
  create(@Body() dto: CreatePurchaseOrderDto, @Request() req: any) {
    return this.purchaseOrderService.create(dto, req.user.id);
  }

  @Get()
  @Roles(Role.MANUFACTURER)
  findAllForManufacturer(@Request() req: any) {
    return this.purchaseOrderService.findAllForManufacturer(req.user.id);
  }

  @Get('my-orders')
  @Roles(Role.SUPPLIER)
  findAllForSupplier(@Request() req: any) {
    return this.purchaseOrderService.findAllForSupplier(req.user.id);
  }

  @Patch(':id/status')
  @Roles(Role.SUPPLIER)
  updateStatus(@Param('id') id: string, @Body() dto: UpdatePurchaseOrderDto, @Request() req: any) {
    return this.purchaseOrderService.updateStatus(id, dto, req.user.id);
  }

  @Patch(':id/deliver')
  @Roles(Role.SUPPLIER)
  markDelivered(@Param('id') id: string) {
    return this.purchaseOrderService.markDelivered(id);
  }
}