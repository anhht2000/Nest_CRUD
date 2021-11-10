import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoProvider {
  async getPhoto() {
    const data = await getManager().find(Photo);

    return data;
  }
}
