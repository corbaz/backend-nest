import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'La Casa de la Pc - 2024';
  }
}
