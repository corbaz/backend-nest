import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
    constructor(private TasksService: TasksService) { }
    
    @Get('/')
    getTasks() {
        return this.TasksService.getTasks();
    }
    @Get('/api')
        
    getTasksApi() {
        return this.TasksService.getTasksApi();
    }

}
