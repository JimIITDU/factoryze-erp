import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Manufacturer } from './manufacturer.schema';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectModel(Manufacturer.name)
    private manufacturerModel: Model<Manufacturer>,
  ) {}

  async create(dto: CreateManufacturerDto): Promise<Manufacturer> {
    const exists = await this.manufacturerModel.findOne({ loginId: dto.loginId });
    if (exists) throw new ConflictException('Login ID already taken');
    const hashed = await bcrypt.hash(dto.password, 10);
    const manufacturer = new this.manufacturerModel({ ...dto, password: hashed });
    return manufacturer.save();
  }

  async findOne(id: string): Promise<Manufacturer | null> {
    return this.manufacturerModel.findById(id).select('-password');
  }
}