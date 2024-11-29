import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Importa el tipo NestExpressApplication que extiende la aplicación de Nest.js
import { NestExpressApplication } from '@nestjs/platform-express';

import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  // Inicializar la aplicación y Declara que usarás NestExpressApplication
  // en lugar de la aplicación por defecto de Nest.js
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar directorio de vistas
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Configurar Handlebars como motor de vistas
  app.setViewEngine('hbs');

  // Registrar parciales (si usas parciales en Handlebars)
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));

  // Configurar recursos estáticos
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Iniciar el servidor
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
