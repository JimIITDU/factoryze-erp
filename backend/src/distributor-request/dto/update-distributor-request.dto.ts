import { IsString, IsOptional } from 'class-validator';
import { DistributorRequestStatus } from '../../common/enums/status.enum';

export class UpdateDistributorRequestDto {
  @IsString()
  @IsOptional()
  status?: DistributorRequestStatus;

  @IsString()
  @IsOptional()
  note?: string;
}