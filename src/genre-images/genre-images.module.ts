import { Module } from '@nestjs/common';
import { GenreImagesService } from './genre-images.service';
import { GenreImagesController } from './genre-images.controller';

@Module({
  controllers: [GenreImagesController],
  providers: [GenreImagesService],
})
export class GenreImagesModule {}
