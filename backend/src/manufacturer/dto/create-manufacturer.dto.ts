import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateManufacturerDto {
  @IsString()
  @IsNotEmpty()
  loginId: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}