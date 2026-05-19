import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

class DeliveryItem {
  productId: Types.ObjectId;
  productName: string;
  quantityDelivered: number;
}

@Schema({ timestamps: true })
export class Delivery extends Document {
  @Prop({ type: Types.ObjectId, ref: 'DistributorRequest', required: true })
  requestId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Distributor', required: true })
  distributorId: Types.ObjectId;

  @Prop({ type: [{ productId: Types.ObjectId, productName: String, quantityDelivered: Number }] })
  items: DeliveryItem[];

  @Prop({ required: true })
  deliveryDate: Date;

  @Prop()
  receiptConfirmedDate: Date;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);