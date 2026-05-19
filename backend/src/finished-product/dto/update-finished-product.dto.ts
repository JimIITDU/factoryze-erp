import { IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateFinishedProductDto {
  @IsNumber()
  @IsOptional()
  @Min(0)
  stockQty?: number;
}