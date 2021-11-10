import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('customer')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('profile')
  getHello(@Res() response: Response): Response {
    const res = this.appService.getHello();
    return response.status(202).json({ res });
  }

  @Post('profile/:id')
  createHello(@Param('id') createCatDto: string): string {
    // const res = this.appService.getHello();
    console.log('dt', createCatDto);

    return 'response.status(202).json({ res })';
  }
}
