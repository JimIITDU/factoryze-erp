import { IsString, IsNumber, IsBoolean, IsOptional, Min } from 'class-validator';

export class CreateStockUpdateDto {
  @IsString()
  productId: string;

  @IsString()
  productName: string;

  @IsNumber()
  @Min(0)
  reportedQty: number;

  @IsBoolean()
  @IsOptional()
  isLowStockAlert?: boolean;
}