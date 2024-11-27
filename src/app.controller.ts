import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getIndex();
  }
  @Get('/about')
  getAbout(): string {
    return this.appService.getAbout();
  }
}
