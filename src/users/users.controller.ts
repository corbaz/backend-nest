import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private _usersService: UsersService) {}

  @Get('/')
  getUsers(): {} {
    return this._usersService.getUsers();
  }
}
