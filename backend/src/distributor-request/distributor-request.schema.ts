import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { DistributorRequestStatus } from '../common/enums/status.enum';

class RequestItem {
  productId: Types.ObjectId;
  productName: string;
  quantity: number;
}

@Schema({ timestamps: true })
export class DistributorRequest extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Distributor', required: true })
  distributorId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Manufacturer', required: true })
  manufacturerId: Types.ObjectId;

  @Prop({ type: [{ productId: Types.ObjectId, productName: String, quantity: Number }] })
  items: RequestItem[];

  @Prop()
  preferredDeliveryDate: Date;

  @Prop({ default: DistributorRequestStatus.PENDING, enum: Object.values(DistributorRequestStatus) })
  status: string;

  @Prop()
  note: string;
}

export const DistributorRequestSchema = SchemaFactory.createForClass(DistributorRequest);