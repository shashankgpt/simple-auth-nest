import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  BadRequestException,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpAuthDto } from './dto/sign-up-auth.dto';
import { SignInAuthDto } from './dto/sign-in-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body(new ValidationPipe()) createAuthDto: SignUpAuthDto) {
    return this.authService.signUp(createAuthDto);
  }

  @HttpCode(200)
  @Post('signin')
  async signIn(@Body(new ValidationPipe()) signInAuthDto: SignInAuthDto) {
    try {
      return await this.authService.signIn(signInAuthDto);
    } catch (error) {
      if (error.message === 'Invalid credentials')
        throw new BadRequestException('Invalid credentials');
    }
  }
}
