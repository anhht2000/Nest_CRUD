import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoController } from './photo.controller';
import { Photo } from './photo.entity';
import { PhotoProvider } from './photo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [PhotoController],
  providers: [PhotoProvider],
})
export class PhotoModule {}
