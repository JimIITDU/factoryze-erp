import { Controller, Post, Get, Patch, Body, Param, UseGuards, Request } from '@nestjs/common';
import { DistributorRequestService } from './distributor-request.service';
import { CreateDistributorRequestDto } from './dto/create-distributor-request.dto';
import { UpdateDistributorRequestDto } from './dto/update-distributor-request.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('distributor-requests')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DistributorRequestController {
  constructor(private readonly distributorRequestService: DistributorRequestService) {}

  @Post()
  @Roles(Role.DISTRIBUTOR)
  create(@Body() dto: CreateDistributorRequestDto, @Request() req: any) {
    return this.distributorRequestService.create(dto, req.user.id, req.user.manufacturerId);
  }

  @Get()
  @Roles(Role.MANUFACTURER)
  findAllForManufacturer(@Request() req: any) {
    return this.distributorRequestService.findAllForManufacturer(req.user.id);
  }

  @Get('my-requests')
  @Roles(Role.DISTRIBUTOR)
  findAllForDistributor(@Request() req: any) {
    return this.distributorRequestService.findAllForDistributor(req.user.id);
  }

  @Patch(':id/status')
  @Roles(Role.MANUFACTURER)
  updateStatus(@Param('id') id: string, @Body() dto: UpdateDistributorRequestDto) {
    return this.distributorRequestService.updateStatus(id, dto);
  }
}