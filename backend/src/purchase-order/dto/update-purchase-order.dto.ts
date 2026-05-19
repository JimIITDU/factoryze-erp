import { IsString, IsOptional } from 'class-validator';
import { PurchaseOrderStatus } from '../../common/enums/status.enum';

export class UpdatePurchaseOrderDto {
  @IsString()
  @IsOptional()
  status?: PurchaseOrderStatus;

  @IsString()
  @IsOptional()
  note?: string;
}