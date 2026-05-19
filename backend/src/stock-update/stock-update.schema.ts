import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class StockUpdate extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Distributor', required: true })
  distributorId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'FinishedProduct', required: true })
  productId: Types.ObjectId;

  @Prop({ required: true })
  productName: string;

  @Prop({ required: true, min: 0 })
  reportedQty: number;

  @Prop({ default: false })
  isLowStockAlert: boolean;
}

export const StockUpdateSchema = SchemaFactory.createForClass(StockUpdate);