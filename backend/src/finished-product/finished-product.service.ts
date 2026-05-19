import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FinishedProduct } from './finished-product.schema';
import { CreateFinishedProductDto } from './dto/create-finished-product.dto';
import { UpdateFinishedProductDto } from './dto/update-finished-product.dto';

@Injectable()
export class FinishedProductService {
  constructor(
    @InjectModel(FinishedProduct.name)
    private finishedProductModel: Model<FinishedProduct>,
  ) {}

  async create(dto: CreateFinishedProductDto): Promise<FinishedProduct> {
    return new this.finishedProductModel(dto).save();
  }

  async findAll(): Promise<FinishedProduct[]> {
    return this.finishedProductModel.find();
  }

  async findOne(id: string): Promise<FinishedProduct> {
    const product = await this.finishedProductModel.findById(id);
    if (!product) throw new NotFoundException('Finished product not found');
    return product;
  }

  async updateStock(id: string, dto: UpdateFinishedProductDto): Promise<FinishedProduct> {
    const product = await this.finishedProductModel.findByIdAndUpdate(id, dto, { new: true });
    if (!product) throw new NotFoundException('Finished product not found');
    return product;
  }
}