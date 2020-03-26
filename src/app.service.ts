import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1> hello <h1>';
  }
  postHello(body:any): string {
    return ""+body.name + " Buenos dias desde el server" 
  }
}
