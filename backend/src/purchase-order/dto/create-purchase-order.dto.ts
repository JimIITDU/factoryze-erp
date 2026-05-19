import { IsString, IsNotEmpty, IsArray, IsDateString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsString()
  rawMaterialId: string;

  @IsString()
  name: string;

  @IsNotEmpty()
  quantity: number;

  @IsString()
  unit: string;
}

export class CreatePurchaseOrderDto {
  @IsString()
  @IsNotEmpty()
  supplierId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsDateString()
  requiredDeliveryDate: string;
}