import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/')
  @Render('index')
  home() {
    return {}; // Puedes pasar datos adicionales si es necesario
  }
  // getHello(): string {
  //   return this.appService.getIndex();
  // }
  @Get('/about')
  getAbout(): string {
    return this.appService.getAbout();
  }
}
