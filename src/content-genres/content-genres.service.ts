import { Injectable } from '@nestjs/common';
import { CreateContentGenreDto } from './dto/create-content-genre.dto';
import { UpdateContentGenreDto } from './dto/update-content-genre.dto';

@Injectable()
export class ContentGenresService {
  create(createContentGenreDto: CreateContentGenreDto) {
    return 'This action adds a new contentGenre';
  }

  findAll() {
    return `This action returns all contentGenres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contentGenre`;
  }

  update(id: number, updateContentGenreDto: UpdateContentGenreDto) {
    return `This action updates a #${id} contentGenre`;
  }

  remove(id: number) {
    return `This action removes a #${id} contentGenre`;
  }
}
