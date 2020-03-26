import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { postDto } from './post.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  postHello(@Body()body:postDto){
   return this.appService.postHello(body)
  }
}
