import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from '../schemas/auth.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { HashService } from 'src/hash/hash.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, HashService, LoggerService],
})
export class AuthModule {}
