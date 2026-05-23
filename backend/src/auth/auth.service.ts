import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcryptjs";

import { LoginDto } from "./dto/login.dto";
import { Manufacturer } from "../manufacturer/manufacturer.schema";
import { Supplier } from "../supplier/supplier.schema";
import { Distributor } from "../distributor/distributor.schema";
import { Role } from "../common/enums/role.enum";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(Manufacturer.name)
    private manufacturerModel: Model<Manufacturer>,
    @InjectModel(Supplier.name)
    private supplierModel: Model<Supplier>,
    @InjectModel(Distributor.name)
    private distributorModel: Model<Distributor>,
  ) {}

  async login(loginDto: LoginDto) {
    const { loginId, password } = loginDto;
    //console.log(loginDto);
    const manufacturer = await this.manufacturerModel.findOne({ loginId });
   // console.log(manufacturer);
    if (manufacturer) {
      const isValid = await bcrypt.compare(password, manufacturer.password);
     // console.log("PASSWORD CHECK:", isValid);
      if (!isValid) {
        throw new UnauthorizedException("Invalid credentials");
      }

      return this.signToken(
        manufacturer._id.toString(),
        loginId,
        Role.MANUFACTURER,
      );
    }

    const supplier = await this.supplierModel.findOne({ loginId });

    if (supplier) {
      const isValid = await bcrypt.compare(password, supplier.password);

      if (!isValid) {
        throw new UnauthorizedException("Invalid credentials");
      }

      return this.signToken(supplier._id.toString(), loginId, Role.SUPPLIER);
    }

    const distributor = await this.distributorModel.findOne({ loginId });

    if (distributor) {
      const isValid = await bcrypt.compare(password, distributor.password);

      if (!isValid) {
        throw new UnauthorizedException("Invalid credentials");
      }

      return this.signToken(
        distributor._id.toString(),
        loginId,
        Role.DISTRIBUTOR,
      );
    }

    throw new UnauthorizedException("Invalid credentials");
  }

  private signToken(id: string, loginId: string, role: Role) {
    const payload = {
      sub: id,
      loginId,
      role,
    };

    return {
      access_token: this.jwtService.sign(payload),
      role,
      id,
    };
  }
}
