import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIndex(): string {
    const title = 'La Casa de la PC - 2024 - MDP';
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('es', { month: 'long' });

    interface User {
      id: number;
      name: string;
      email: string;
    }

    const users: User[] = [
      { id: 1, name: 'Julio Cesar Corbaz', email: 'julio.corbaz@gmail.com' },
      { id: 2, name: 'La Casa de la PC', email: 'lacasadelapc@hotmail.com' },
    ];

    const HEAD = `
      <head>
      <script src="https://cdn.tailwindcss.com"></script>
      <title>${title}</title>
      <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
      </head>`;

    const BODY = `
      <body>
      <div class="text-4xl font-bold text-center text-pink-600 p-4">
        ${title}
      </div>
      </body>`;

    const FOOTER = `
      <footer class="bg-gradient-to-r from-black to-gray-800 text-white py-6 mt-8">
        <div class="container mx-auto flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/julio.cesar.corbaz/"
            target="_blank"
            class="transform hover:scale-150 transition-transform"
          >
            <i class="fab fa-instagram text-2xl hover:text-pink-400"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/julio-corbaz/"
            target="_blank"
            class="transform hover:scale-150 transition-transform"
          >
            <i class="fab fa-linkedin text-2xl hover:text-blue-400"></i>
          </a>
          <a
            href="https://wa.me/54223544899"
            target="_blank"
            class="transform hover:scale-150 transition-transform"
          >
            <i class="fab fa-whatsapp text-2xl hover:text-green-400"></i>
          </a>
          <a
            href="https://twitter.com/julio_corbaz"
            target="_blank"
            class="transform hover:scale-150 transition-transform"
          >
            <i class="fab fa-twitter text-2xl hover:text-blue-300"></i>
          </a>
          <a
            href="https://github.com/corbaz"
            target="_blank"
            class="transform hover:scale-150 transition-transform"
          >
            <i class="fab fa-github text-2xl hover:text-purple-400"></i>
          </a>
        </div>
        <div class="text-center mt-4 text-gray-300">
          ${month} ${year} - Todos los derechos reservados
        </div>
      </footer>
    `;

    const template = `
    <!DOCTYPE html>
    <html lang="es">
      ${HEAD}
      ${BODY.replace(
      '</body>',
      `
      <div class="container mx-auto p-4">
      <div class="grid gap-4">
        ${users
        .map(
          (user) => `
              <div class="bg-gray-100 p-4 rounded-lg">
                <h3 class="text-gray-900 font-bold">${user.name}</h3>
                <p class="text-gray-900">${user.email}</p>
              </div>
        `,
        )
        .join('')}
      </div>
      </div>
      ${FOOTER}
      </body>`,
    )}
    </html>`;

    return template;
  }

  getAbout(): string {
    const title = 'About';

    const HEAD = `
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>`;

    const BODY = `
            <body>
                <div class="text-4xl font-bold text-center text-blue-600 p-4">
                ${title}
                </div>
            </body>`;

    const template = `
            <!DOCTYPE html>
            <html>
            ${HEAD}
            ${BODY}
            </html>`;

    return template;
  }
}
