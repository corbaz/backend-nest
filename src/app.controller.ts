// src/app.controller.ts
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/')
  @Render('pages/index')
  getIndex() {
    return this.appService.getIndex(); // Puedes pasar datos adicionales si es necesario
  }

  @Get('about')
  @Render('pages/about')
  getAbout() {
    return this.appService.getAbout();
  }
}
