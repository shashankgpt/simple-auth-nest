import { Injectable } from '@nestjs/common';
import { SignUpAuthDto } from './dto/sign-up-auth.dto';
import { SignInAuthDto } from './dto/sign-in-auth.dto';
import { User } from './schemas/auth.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  signUp(signUpAuthDto: SignUpAuthDto) {
    const user = new this.userModel(signUpAuthDto);
    return user.save();
  }

  signIn(signInAuthDto: SignInAuthDto) {
    return 'Signed in successfully';
  }
}
