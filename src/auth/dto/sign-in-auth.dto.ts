import { PartialType } from '@nestjs/mapped-types';
import { SignUpAuthDto } from './sign-up-auth.dto';
import { MinLength, IsEmail } from "class-validator";

export class SignInAuthDto extends PartialType(SignUpAuthDto) {
    @IsEmail()
    email: string;
    @MinLength(8)
    password: string;
}
