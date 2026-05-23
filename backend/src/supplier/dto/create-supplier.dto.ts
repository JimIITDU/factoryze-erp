import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateSupplierDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  loginId: string;

  @IsNotEmpty()
  @Length(8, 15)
  password: string;

  @IsNotEmpty()
  companyName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(11, 11)
  phone: string;

  @IsNotEmpty()
  address: string;
}