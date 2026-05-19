import { IsString, IsOptional } from 'class-validator';

export class UpdateDistributorDto {
  @IsString()
  @IsOptional()
  name?: string;
}