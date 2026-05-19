import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('manufacturer')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) {}

  @Post('register')
  create(@Body() dto: CreateManufacturerDto) {
    return this.manufacturerService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manufacturerService.findOne(id);
  }
}