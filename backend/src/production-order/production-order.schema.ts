import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ProductionOrderStatus } from '../common/enums/status.enum';

@Schema({ timestamps: true })
export class ProductionOrder extends Document {
  @Prop({ type: Types.ObjectId, ref: 'FinishedProduct', required: true })
  productId: Types.ObjectId;

  @Prop({ required: true })
  productName: string;

  @Prop({ required: true, min: 1 })
  quantity: number;

  @Prop({ default: ProductionOrderStatus.REQUESTED, enum: Object.values(ProductionOrderStatus) })
  status: string;
}

export const ProductionOrderSchema = SchemaFactory.createForClass(ProductionOrder);