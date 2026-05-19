import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class RawMaterial extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  unit: string;

  @Prop({ default: 0 })
  stockQty: number;
}

export const RawMaterialSchema = SchemaFactory.createForClass(RawMaterial);