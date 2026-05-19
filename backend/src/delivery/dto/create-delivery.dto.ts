import { IsString, IsArray, IsDateString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class DeliveryItemDto {
  @IsString()
  productId: string;

  @IsString()
  productName: string;

  quantityDelivered: number;
}

export class CreateDeliveryDto {
  @IsString()
  requestId: string;

  @IsString()
  distributorId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeliveryItemDto)
  items: DeliveryItemDto[];

  @IsDateString()
  deliveryDate: string;
}