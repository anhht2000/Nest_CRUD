import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreatePhotoDto } from './photo.dto';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoProvider {
  async getPhoto() {
    const data = await getManager().find(Photo);

    return data;
  }

  async createPhoto(photo: CreatePhotoDto) {
    // const data = await getManager().create(Photo, photo);
    const dt = new Photo();
    Object.assign(dt, photo);
    getManager().save(dt);

    return dt;
  }
}
