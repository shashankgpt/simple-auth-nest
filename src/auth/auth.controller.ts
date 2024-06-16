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
import { LoggerService } from 'src/logger/logger.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly loggerService: LoggerService,
  ) {}

  @Post('signup')
  async signUp(@Body(new ValidationPipe()) createAuthDto: SignUpAuthDto) {
    try {
      return await this.authService.signUp(createAuthDto);
    } catch (error) {
      this.loggerService.logError(error);
      if (error.message === 'Email already exists')
        throw new BadRequestException('Email already exists');
    }
  }

  @HttpCode(200)
  @Post('signin')
  async signIn(@Body(new ValidationPipe()) signInAuthDto: SignInAuthDto) {
    try {
      return await this.authService.signIn(signInAuthDto);
    } catch (error) {
      this.loggerService.logError(error);
      if (error.message === 'Invalid credentials')
        throw new BadRequestException('Invalid credentials');
    }
  }
}
