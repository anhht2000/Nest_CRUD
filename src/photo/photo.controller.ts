import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  Res,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreatePhotoDto } from './photo.dto';
import { ErrorsInterceptor } from './photo.inteceptor';
import { PhotoProvider } from './photo.service';

@Controller('photo')
@UsePipes(new ValidationPipe())
// @UseInterceptors(ErrorsInterceptor)
export class PhotoController {
  constructor(private photoService: PhotoProvider) {}

  @Get()
  @HttpCode(200)
  async findAll(@Res() response: Response) {
    const dt = await this.photoService.getPhoto();

    return response.json({ data: dt });
  }

  @Post()
  @HttpCode(201)
  async createPhoto(@Res() response: Response, @Body() body: CreatePhotoDto) {
    const dt = await this.photoService.createPhoto(body);

    return response.json({ message: 'success' });
  }

  @Put('/:id')
  @HttpCode(202)
  async editPhoto(
    @Res() response: Response,
    @Body() body: CreatePhotoDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const dt = await this.photoService.editPhoto(id, body);

    return response.json({ message: 'success' });
  }

  @Delete('/:id')
  @HttpCode(200)
  async deletePhoto(
    @Res() response: Response,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const dt = await this.photoService.deletePhoto(id);

    return response.json({ message: 'success' });
  }
}
