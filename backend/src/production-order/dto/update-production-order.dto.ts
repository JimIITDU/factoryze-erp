import { IsString, IsOptional } from 'class-validator';
import { ProductionOrderStatus } from '../../common/enums/status.enum';

export class UpdateProductionOrderDto {
  @IsString()
  @IsOptional()
  status?: ProductionOrderStatus;
}