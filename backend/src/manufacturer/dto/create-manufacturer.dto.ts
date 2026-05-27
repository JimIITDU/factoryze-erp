import { IsString, IsNotEmpty, IsEmail, IsOptional, MinLength } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  ownerName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsOptional()
  licenseNumber?: string;
}