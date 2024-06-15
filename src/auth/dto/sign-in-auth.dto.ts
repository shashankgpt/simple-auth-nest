import { MinLength, IsEmail } from 'class-validator';

export class SignInAuthDto {
  @IsEmail()
  email: string;
  @MinLength(8)
  password: string;
}
