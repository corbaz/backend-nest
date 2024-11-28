import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'; // Importa el tipo NestExpressApplication
import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // Declara que usarás NestExpressApplication

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
