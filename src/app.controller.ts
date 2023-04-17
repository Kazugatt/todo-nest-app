import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello green class';
    return this.appService.getHello();
  }

  @Get('/green')
  getGreen(): string {
    return '<h1><i>Hello Green class</i></h1>';
  }
}
