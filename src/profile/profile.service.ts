import { Injectable } from '@nestjs/common';
import { User } from '../auth/schemas/auth.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProfileService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async getProfile(id: string) {
    const user = await this.userModel.findOne({ _id: id });
    user.password = undefined;
    return user;
  }
}
