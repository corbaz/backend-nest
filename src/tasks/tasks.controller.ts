import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    getTasks() {
        const title = 'Controller de Task';

        const HEAD = `
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>`;

        const BODY = `
      <body>
        <div class="text-4xl font-bold text-center text-pink-600 p-4">
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
