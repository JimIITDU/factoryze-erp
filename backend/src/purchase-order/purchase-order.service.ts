import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { PurchaseOrder } from './purchase-order.schema';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { PurchaseOrderStatus } from '../common/enums/status.enum';

@Injectable()
export class PurchaseOrderService {
  constructor(
    @InjectModel(PurchaseOrder.name)
    private purchaseOrderModel: Model<PurchaseOrder>,
  ) {}

  async create(dto: CreatePurchaseOrderDto, manufacturerId: string): Promise<PurchaseOrder> {
    const order = new this.purchaseOrderModel({
      ...dto,
      manufacturerId: new Types.ObjectId(manufacturerId),
      supplierId: new Types.ObjectId(dto.supplierId),
    });
    return order.save();
  }

  async findAllForManufacturer(manufacturerId: string): Promise<PurchaseOrder[]> {
    return this.purchaseOrderModel
      .find({ manufacturerId })
      .populate('supplierId', 'name loginId');
  }

  async findAllForSupplier(supplierId: string): Promise<PurchaseOrder[]> {
    return this.purchaseOrderModel
      .find({ supplierId })
      .populate('manufacturerId', 'name');
  }

  async updateStatus(id: string, dto: UpdatePurchaseOrderDto, userId: string): Promise<PurchaseOrder> {
    const order = await this.purchaseOrderModel.findById(id);
    if (!order) throw new NotFoundException('Purchase order not found');
    Object.assign(order, dto);
    return order.save();
  }

  async markDelivered(id: string): Promise<PurchaseOrder> {
    const order = await this.purchaseOrderModel.findById(id);
    if (!order) throw new NotFoundException('Purchase order not found');
    if (order.status !== PurchaseOrderStatus.ACCEPTED)
      throw new ForbiddenException('Order must be accepted before marking delivered');
    order.status = PurchaseOrderStatus.DELIVERED;
    return order.save();
  }
}