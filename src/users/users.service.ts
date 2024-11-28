import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private _users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'julio.corbaz@gmail.com',
    },

    {
      id: 2,
      name: 'Jane Doe',
      email: 'lacasadelapc@hotmail.com',
    },
  ];

  getUsers() {
    return this._users;
  }
}
