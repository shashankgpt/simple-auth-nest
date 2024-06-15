import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getProfile(@Request() req) {
        return this.profileService.getProfile(req.user.userId);
    }
}
