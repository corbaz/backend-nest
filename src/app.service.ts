import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'julio.corbaz@gmail.com! - Julio Cesar Corbaz';
  }
}
