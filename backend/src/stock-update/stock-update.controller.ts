import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { StockUpdateService } from './stock-update.service';
import { CreateStockUpdateDto } from './dto/create-stock-update.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('stock-updates')
@UseGuards(JwtAuthGuard, RolesGuard)
export class StockUpdateController {
  constructor(private readonly stockUpdateService: StockUpdateService) {}

  @Post()
  @Roles(Role.DISTRIBUTOR)
  create(@Body() dto: CreateStockUpdateDto, @Request() req: any) {
    return this.stockUpdateService.create(dto, req.user.id);
  }

  @Get()
  @Roles(Role.MANUFACTURER)
  findAll() {
    return this.stockUpdateService.findAll();
  }

  @Get('my-updates')
  @Roles(Role.DISTRIBUTOR)
  findByDistributor(@Request() req: any) {
    return this.stockUpdateService.findByDistributor(req.user.id);
  }
}