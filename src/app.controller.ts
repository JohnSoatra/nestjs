import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get()
    getJson(): {name: string, age: number} {
        return {
            name: 'Soatra',
            age: 20
        };
    }
}
