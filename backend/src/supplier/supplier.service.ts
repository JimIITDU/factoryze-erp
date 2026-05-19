import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Supplier } from './supplier.schema';
import { CreateSupplierDto } from './dto/create-supplier.dto';

@Injectable()
export class SupplierService {
  constructor(
    @InjectModel(Supplier.name)
    private supplierModel: Model<Supplier>,
  ) {}

  async create(dto: CreateSupplierDto, manufacturerId: string): Promise<Supplier> {
    const exists = await this.supplierModel.findOne({ loginId: dto.loginId });
    if (exists) throw new ConflictException('Login ID already taken');
    const hashed = await bcrypt.hash(dto.password, 10);
    const supplier = new this.supplierModel({
      ...dto,
      password: hashed,
      manufacturerId: new Types.ObjectId(manufacturerId),
    });
    return supplier.save();
  }

  async findAll(manufacturerId: string): Promise<Supplier[]> {
    return this.supplierModel
      .find({ manufacturerId })
      .select('-password');
  }

  async findOne(id: string): Promise<Supplier> {
    const supplier = await this.supplierModel.findById(id).select('-password');
    if (!supplier) throw new NotFoundException('Supplier not found');
    return supplier;
  }
}