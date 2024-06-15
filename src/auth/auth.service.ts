import { Injectable } from '@nestjs/common';
import { SignUpAuthDto } from './dto/sign-up-auth.dto';
import { SignInAuthDto } from './dto/sign-in-auth.dto';

@Injectable()
export class AuthService {
  signUp(signUpAuthDto: SignUpAuthDto) {
    return 'This action adds a new auth';
  }

  signIn(signInAuthDto: SignInAuthDto) {
    return 'Signed in successfully';
  }
}
