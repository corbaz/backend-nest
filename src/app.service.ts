// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { headerData } from './data/header.data';
import { footerData } from './data/footer.data';

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.toLocaleString('es', { month: 'long' }).toUpperCase();

@Injectable()
export class AppService {
  // Retorna los datos del encabezado
  getHeader() {
    return { headerData, footerData };
  }
  // Método para datos de la página de inicio
  getIndex() {
    const { menu, empresa, subtitle, features } = headerData;
    const { socialLinks } = footerData;
    return {
      title: 'Home',
      logoUrl: 'public/images/foto.png',
      menu,
      empresa,
      subtitle,
      features,
      socialLinks,
      currentYear: year,
      currentMonth: month,
    };
  }

  // Método para generar una plantilla HTML para la página "About"
  getAbout() {
    const { menu, empresa, subtitle, features } = headerData;
    const { socialLinks } = footerData;
    return {
      title: 'About',
      logoUrl: 'public/images/foto.png',
      menu,
      empresa,
      subtitle,
      features,
      socialLinks,
      currentYear: year,
      currentMonth: month,
    };
  }
}
