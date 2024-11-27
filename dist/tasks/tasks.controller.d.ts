import { TasksService } from './tasks.service';
export declare class TasksController {
    private _tasksService;
    constructor(_tasksService: TasksService);
    getTasks(): string;
    getTasksApi(): string;
}
