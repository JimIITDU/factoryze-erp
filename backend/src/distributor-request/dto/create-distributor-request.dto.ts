import { IsArray, IsDateString, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class RequestItemDto {
  @IsString()
  productId: string;

  @IsString()
  productName: string;

  quantity: number;
}

export class CreateDistributorRequestDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RequestItemDto)
  items: RequestItemDto[];

  @IsDateString()
  @IsOptional()
  preferredDeliveryDate?: string;
}