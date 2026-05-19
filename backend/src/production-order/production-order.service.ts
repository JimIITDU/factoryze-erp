import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ProductionOrder } from './production-order.schema';
import { CreateProductionOrderDto } from './dto/create-production-order.dto';
import { UpdateProductionOrderDto } from './dto/update-production-order.dto';

@Injectable()
export class ProductionOrderService {
  constructor(
    @InjectModel(ProductionOrder.name)
    private productionOrderModel: Model<ProductionOrder>,
  ) {}

  async create(dto: CreateProductionOrderDto): Promise<ProductionOrder> {
    const order = new this.productionOrderModel({
      ...dto,
      productId: new Types.ObjectId(dto.productId),
    });
    return order.save();
  }

  async findAll(): Promise<ProductionOrder[]> {
    return this.productionOrderModel.find().populate('productId');
  }

  async updateStatus(id: string, dto: UpdateProductionOrderDto): Promise<ProductionOrder> {
    const order = await this.productionOrderModel.findByIdAndUpdate(id, dto, { new: true });
    if (!order) throw new NotFoundException('Production order not found');
    return order;
  }
}