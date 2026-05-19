import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PurchaseOrderStatus } from '../common/enums/status.enum';

class OrderItem {
  rawMaterialId: Types.ObjectId;
  name: string;
  quantity: number;
  unit: string;
}

@Schema({ timestamps: true })
export class PurchaseOrder extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Manufacturer', required: true })
  manufacturerId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Supplier', required: true })
  supplierId: Types.ObjectId;

  @Prop({ type: [{ rawMaterialId: Types.ObjectId, name: String, quantity: Number, unit: String }] })
  items: OrderItem[];

  @Prop({ required: true })
  requiredDeliveryDate: Date;

  @Prop({ default: PurchaseOrderStatus.REQUESTED, enum: Object.values(PurchaseOrderStatus) })
  status: string;

  @Prop()
  note: string;
}

export const PurchaseOrderSchema = SchemaFactory.createForClass(PurchaseOrder);