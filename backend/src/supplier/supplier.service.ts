import {
  Injectable,
  ConflictException,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcryptjs";
import { Supplier } from "./supplier.schema";
import { CreateSupplierDto } from "./dto/create-supplier.dto";

@Injectable()
export class SupplierService {
  constructor(
    @InjectModel(Supplier.name)
    private supplierModel: Model<Supplier>,
  ) {}

  async create(dto: CreateSupplierDto): Promise<Supplier> {
    const exists = await this.supplierModel.findOne({
      loginId: dto.loginId,
    });

    if (exists) {
      throw new ConflictException("Login ID already taken");
    }

    const hashed = await bcrypt.hash(dto.password, 10);

    const supplier = new this.supplierModel({
      ...dto,
      password: hashed,
    });

    return supplier.save();
  }

  async findAll() {
    return this.supplierModel.find().select("-password");
  }

  async findOne(id: string): Promise<Supplier> {
    const supplier = await this.supplierModel
      .findById(id)
      .select("-password");

    if (!supplier) {
      throw new NotFoundException("Supplier not found");
    }

    return supplier;
  }
}