import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
} from 'class-validator';

export class CreateDistributorDto {
  @IsString()
  @IsNotEmpty()
  loginId: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}