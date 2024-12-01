// src/app.service.ts
import { Injectable } from '@nestjs/common';
const empresa = 'La Casa de la PC - 2024 - MDP';
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.toLocaleString('es', { month: 'long' }).toUpperCase();

const menu = [
  { link: 'Inicio', url: '/' },
  { link: 'Productos', url: '/productos' },
  { link: 'Servicios', url: '/servicios' },
  { link: 'Contacto', url: '/contacto' },
  { link: 'Nosotros', url: '/about' },
];
@Injectable()
export class AppService {
  // Método para datos de la página de inicio
  getIndex() {
    const title = 'Home';
    return {
      title,
      empresa,
      menu,
      socialLinks: [
        {
          icon: 'fab fa-instagram',
          url: 'https://www.instagram.com/julio.cesar.corbaz/',
          hoverColor: 'hover:text-pink-400',
        },
        {
          icon: 'fab fa-linkedin',
          url: 'https://www.linkedin.com/in/julio-corbaz/',
          hoverColor: 'hover:text-blue-400',
        },
        {
          icon: 'fab fa-whatsapp',
          url: 'https://wa.me/54223544899',
          hoverColor: 'hover:text-green-400',
        },
        {
          icon: 'fab fa-twitter',
          url: 'https://twitter.com/julio_corbaz',
          hoverColor: 'hover:text-blue-300',
        },
        {
          icon: 'fab fa-github',
          url: 'https://github.com/corbaz',
          hoverColor: 'hover:text-purple-400',
        },
      ],
      subtitle: 'Explora nuestros productos y servicios.',
      currentYear: year,
      currentMonth: month,
      features: [
        {
          title: 'Envío Rápido',
          description: 'Logística optimizada para tiempos de entrega rápidos.',
        },
        {
          title: 'Calidad Garantizada',
          description: 'Ofrecemos solo productos de alta calidad.',
        },
        {
          title: 'Atención al Cliente',
          description: 'Estamos aquí para ayudarte siempre que lo necesites.',
        },
      ],
    };
  }

  // Método para generar una plantilla HTML para la página "About"
  getAbout() {
    const title = 'About';

    return {
      title,
      empresa,
      menu,
      socialLinks: [
        {
          icon: 'fab fa-instagram',
          url: 'https://www.instagram.com/julio.cesar.corbaz/',
          hoverColor: 'hover:text-pink-400',
        },
        {
          icon: 'fab fa-linkedin',
          url: 'https://www.linkedin.com/in/julio-corbaz/',
          hoverColor: 'hover:text-blue-400',
        },
        {
          icon: 'fab fa-whatsapp',
          url: 'https://wa.me/54223544899',
          hoverColor: 'hover:text-green-400',
        },
        {
          icon: 'fab fa-twitter',
          url: 'https://twitter.com/julio_corbaz',
          hoverColor: 'hover:text-blue-300',
        },
        {
          icon: 'fab fa-github',
          url: 'https://github.com/corbaz',
          hoverColor: 'hover:text-purple-400',
        },
      ],
      subtitle: 'Explora nuestros productos y servicios.',
      currentYear: year,
      currentMonth: month,
    };
  }
}
