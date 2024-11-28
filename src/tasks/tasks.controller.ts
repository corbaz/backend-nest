import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private _tasksService: TasksService) {}

  @Get('/')
  getTasks() {
    return this._tasksService.getTasks();
  }
  @Get('/api')
  getTasksApi() {
    return this._tasksService.getTasksApi();
  }
}
