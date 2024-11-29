import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Método para datos de la página de inicio
  getIndex() {
    const title = 'La Casa de la PC - 2024 - MDP';
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate
      .toLocaleString('es', { month: 'long' })
      .toUpperCase();

    const menu = [
      { text: 'Inicio', url: '/' },
      { text: 'Productos', url: '/productos' },
      { text: 'Servicios', url: '/servicios' },
      { text: 'Contacto', url: '/contacto' },
      { text: 'Nosotros', url: '/about' },
    ];

    return {
      title,
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
  getAbout(): string {
    const title = 'About';

    const head = `
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
    `;

    const body = `
      <body class="bg-gray-100">
        <div class="text-4xl font-bold text-center text-blue-600 p-4">
          ${title}
        </div>
        <div class="text-lg text-center text-gray-600">
          Bienvenido a la página de información sobre nosotros.
        </div>
        <div class="flex justify-center mt-4">
            <a href="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <i class="fas fa-home"></i> Volver al Home
            </a>
        </div>
      </body>
    `;

    const template = `
      <!DOCTYPE html>
      <html>
        ${head}
        ${body}
      </html>
    `;

    return template;
  }
}
