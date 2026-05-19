import { IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateRawMaterialDto {
  @IsNumber()
  @IsOptional()
  @Min(0)
  stockQty?: number;
}