import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  AuthService,
  LocalAuthGuard,
  JwtAuthGuard,
} from '../../../../libs/app/shared/auth/src';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @Get()
  sayHello() {
    return 'Hello World!';
  }

  @Get('/api')
  getData() {
    return this.appService.getData();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() req) {
    console.log('Requested User: ', req);
    // return req.user;
    return this.authService.login(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
