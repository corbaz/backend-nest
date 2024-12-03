// src/app.controller.ts
import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { FastifyReply } from 'fastify';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/')
  async getIndex(@Res() reply: FastifyReply) {
    const data = this.appService.getIndex();
    return reply.view('pages/index', data); // Renderiza la plantilla "index.hbs" con datos
  }

  @Get('about')
  async getAbout(@Res() reply: FastifyReply) {
    const data = this.appService.getAbout();
    return reply.view('pages/about', data); // Renderiza la plantilla "about.hbs" con datos
  }
}
