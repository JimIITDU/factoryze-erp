import { Controller, Post, Get, Patch, Body, Param, UseGuards, Request } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('deliveries')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  @Roles(Role.MANUFACTURER)
  create(@Body() dto: CreateDeliveryDto) {
    return this.deliveryService.create(dto);
  }

  @Get()
  @Roles(Role.MANUFACTURER)
  findAll() {
    return this.deliveryService.findAll();
  }

  @Get('my-deliveries')
  @Roles(Role.DISTRIBUTOR)
  findByDistributor(@Request() req: any) {
    return this.deliveryService.findByDistributor(req.user.id);
  }

  @Patch(':id/confirm')
  @Roles(Role.DISTRIBUTOR)
  confirmReceipt(@Param('id') id: string) {
    return this.deliveryService.confirmReceipt(id);
  }
}