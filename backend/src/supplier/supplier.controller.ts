import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
} from "@nestjs/common";
import { SupplierService } from "./supplier.service";
import { CreateSupplierDto } from "./dto/create-supplier.dto";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard";
import { RolesGuard } from "../common/guards/roles.guard";
import { Roles } from "../common/decorators/roles.decorator";
import { Role } from "../common/enums/role.enum";

@Controller("suppliers")
@UseGuards(JwtAuthGuard, RolesGuard)
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  @Roles(Role.MANUFACTURER)
  create(@Body() dto: CreateSupplierDto) {
    return this.supplierService.create(dto);
  }

  @Get()
  @Roles(Role.MANUFACTURER)
  findAll() {
    return this.supplierService.findAll();
  }

  @Get(":id")
  @Roles(Role.MANUFACTURER)
  findOne(@Param("id") id: string) {
    return this.supplierService.findOne(id);
  }
}