import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express';
import { PhotoProvider } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoProvider) {}

  @Get()
  @HttpCode(200)
  async findAll(@Res() response: Response) {
    const dt = await this.photoService.getPhoto();
    return response.json({ data: dt });
  }
}
