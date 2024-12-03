// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyStatic from '@fastify/static';
import fastifyView from '@fastify/view';
import * as handlebars from 'handlebars';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const fastifyInstance = app.getHttpAdapter().getInstance();

  // Configurar motor de vistas
  fastifyInstance.register(fastifyView, {
    engine: {
      handlebars,
    },
    root: path.join(__dirname, '..', '/views'),
    layout: '/layouts/layout.hbs',
    options: {
      partials: {
        head: '/partials/head.hbs',
        header: '/partials/header.hbs',
        footer: '/partials/footer.hbs',
      },
    },
  });

  fastifyInstance.register(fastifyStatic, {
    root: path.join(__dirname, '..', '/public'),
    prefix: '/public/',
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
