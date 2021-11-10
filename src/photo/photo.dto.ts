import {
  IsBoolean,
  isBoolean,
  IsBooleanString,
  IsEmail,
  IsInt,
  isInt,
  IsNotEmpty,
  IsNumberString,
  IsString,
  MinLength,
} from 'class-validator';

export class CreatePhotoDto {
  @MinLength(2, { message: 'Nhap ten it nhat la 2 ky tu' })
  name: string;

  @MinLength(2, { message: 'Nhap mieu ta it nhat la 2 ky tu' })
  description: string;

  @IsString()
  filename: string;

  @IsNumberString()
  views: number;

  @IsBooleanString()
  isPublished: boolean;
}
