import { MinLength, IsEmail } from 'class-validator';

export class SignUpAuthDto {
  @MinLength(3)
  name: string;
  @IsEmail()
  email: string;
  @MinLength(8)
  password: string;
}
