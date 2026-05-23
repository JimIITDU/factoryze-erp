import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Manufacturer extends Document {

  @Prop({ required: true, unique: true })
  loginId: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: "manufacturer" })
  role: string;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  ownerName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop()
  licenseNumber: string;
}

export const ManufacturerSchema =
  SchemaFactory.createForClass(Manufacturer);