// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  // Crear la aplicación como NestExpressApplication
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar carpeta de vistas
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Registrar partials
  // hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));

  // Configurar motor de vistas como Handlebars
  app.setViewEngine('hbs');

  // Configurar layout predeterminado
  app.set('view options', {
    layout: 'layouts/layouts',
    partials: 'partials/',
  });

  // Configurar recursos estáticos
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Iniciar el servidor
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
