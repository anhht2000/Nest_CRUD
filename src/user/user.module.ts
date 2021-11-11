import { PhotoProvider } from './../photo/photo.service';
import { PhotoController } from './../photo/photo.controller';
import { User } from './user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [PhotoController],
  providers: [PhotoProvider],
})
export class UserModule {}
