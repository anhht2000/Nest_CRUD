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
    const dt = new Photo();
    Object.assign(dt, photo);
    await getManager().save(dt);

    return dt;
  }

  async editPhoto(id: number, photo: CreatePhotoDto) {
    const pt = await getManager().update(Photo, id, { ...photo });

    return photo;
  }

  async deletePhoto(id: number) {
    const pt = await getManager().delete(Photo, id);

    return 'photo';
  }
}
