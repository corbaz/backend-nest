import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
    const title = 'Service de Tasks - 2024';

    const HEAD = `
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>`;

    const BODY = `
            <body>
                <div class="text-4xl font-bold text-center text-cyan-600 p-4">
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

  getTasksApi() {
    const title = 'Service de Task-API';

    const HEAD = `
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>`;

    const BODY = `
            <body>
                <div class="text-4xl font-bold text-center text-red-600 p-4">
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
