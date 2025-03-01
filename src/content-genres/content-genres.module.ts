import { Module } from '@nestjs/common';
import { ContentGenresService } from './content-genres.service';
import { ContentGenresController } from './content-genres.controller';

@Module({
  controllers: [ContentGenresController],
  providers: [ContentGenresService],
})
export class ContentGenresModule {}
