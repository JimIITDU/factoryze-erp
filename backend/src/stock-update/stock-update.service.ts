import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { StockUpdate } from './stock-update.schema';
import { CreateStockUpdateDto } from './dto/create-stock-update.dto';

@Injectable()
export class StockUpdateService {
  constructor(
    @InjectModel(StockUpdate.name)
    private stockUpdateModel: Model<StockUpdate>,
  ) {}

  async create(dto: CreateStockUpdateDto, distributorId: string): Promise<StockUpdate> {
    const update = new this.stockUpdateModel({
      ...dto,
      distributorId: new Types.ObjectId(distributorId),
      productId: new Types.ObjectId(dto.productId),
    });
    return update.save();
  }

  async findAll(): Promise<StockUpdate[]> {
    return this.stockUpdateModel
      .find()
      .populate('distributorId', 'name')
      .populate('productId', 'name')
      .sort({ createdAt: -1 });
  }

  async findByDistributor(distributorId: string): Promise<StockUpdate[]> {
    return this.stockUpdateModel.find({ distributorId }).sort({ createdAt: -1 });
  }
}