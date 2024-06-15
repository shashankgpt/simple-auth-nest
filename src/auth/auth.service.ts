import { Injectable } from '@nestjs/common';
import { SignUpAuthDto } from './dto/sign-up-auth.dto';
import { SignInAuthDto } from './dto/sign-in-auth.dto';
import { User } from './schemas/auth.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { HashService } from 'src/hash/hash.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
    private hashService: HashService,
  ) {}

  async signUp(signUpAuthDto: SignUpAuthDto) {
    signUpAuthDto.password = await this.hashService.hashPassword(
      signUpAuthDto.password,
    );
    const user = new this.userModel(signUpAuthDto);
    return (await user.save())._id;
  }

  async signIn(signInAuthDto: SignInAuthDto) {
    const user = await this.userModel.findOne({ email: signInAuthDto.email });
    if (
      user &&
      !(await this.hashService.comparePassword(
        signInAuthDto.password,
        user.password,
      ))
    ) {
      throw new Error('Invalid credentials');
    }
    return {
      acces_token: this.jwtService.sign({ email: user.email, sub: user._id }),
    };
  }
}
