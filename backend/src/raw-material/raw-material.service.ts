import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RawMaterial } from './raw-material.schema';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';

@Injectable()
export class RawMaterialService {
  constructor(
    @InjectModel(RawMaterial.name)
    private rawMaterialModel: Model<RawMaterial>,
  ) {}

  async create(dto: CreateRawMaterialDto): Promise<RawMaterial> {
    return new this.rawMaterialModel(dto).save();
  }

  async findAll(): Promise<RawMaterial[]> {
    return this.rawMaterialModel.find();
  }

  async findOne(id: string): Promise<RawMaterial> {
    const material = await this.rawMaterialModel.findById(id);
    if (!material) throw new NotFoundException('Raw material not found');
    return material;
  }

  async updateStock(id: string, dto: UpdateRawMaterialDto): Promise<RawMaterial> {
    const material = await this.rawMaterialModel.findByIdAndUpdate(id, dto, { new: true });
    if (!material) throw new NotFoundException('Raw material not found');
    return material;
  }
}