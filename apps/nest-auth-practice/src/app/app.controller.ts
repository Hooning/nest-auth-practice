import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sayHello() {
    return 'Hello World!';
  }

  @Get('/api')
  getData() {
    return this.appService.getData();
  }
}
