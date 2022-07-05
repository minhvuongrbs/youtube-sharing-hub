import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHomePage(): string {
    return 'Youtube Sharing Backend, copyright by @Vincent';
  }
}
