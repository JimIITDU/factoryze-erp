import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Delivery } from './delivery.schema';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectModel(Delivery.name)
    private deliveryModel: Model<Delivery>,
  ) {}

  async create(dto: CreateDeliveryDto): Promise<Delivery> {
    const delivery = new this.deliveryModel({
      ...dto,
      requestId: new Types.ObjectId(dto.requestId),
      distributorId: new Types.ObjectId(dto.distributorId),
    });
    return delivery.save();
  }

  async findAll(): Promise<Delivery[]> {
    return this.deliveryModel
      .find()
      .populate('distributorId', 'name')
      .populate('requestId');
  }

  async confirmReceipt(id: string): Promise<Delivery> {
    const delivery = await this.deliveryModel.findById(id);
    if (!delivery) throw new NotFoundException('Delivery not found');
    delivery.receiptConfirmedDate = new Date();
    return delivery.save();
  }

  async findByDistributor(distributorId: string): Promise<Delivery[]> {
    return this.deliveryModel.find({ distributorId });
  }
}