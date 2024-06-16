import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './profile/profile.module';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/nest-auth'),
    ProfileModule,
  ],
  controllers: [],
  providers: [LoggerService],
})
export class AppModule {}
