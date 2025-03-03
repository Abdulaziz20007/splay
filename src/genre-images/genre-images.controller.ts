import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenreImagesService } from './genre-images.service';
import { CreateGenreImageDto } from './dto/create-genre-image.dto';
import { UpdateGenreImageDto } from './dto/update-genre-image.dto';

@Controller('genre-images')
export class GenreImagesController {
  constructor(private readonly genreImagesService: GenreImagesService) {}

  @Post()
  create(@Body() createGenreImageDto: CreateGenreImageDto) {
    return this.genreImagesService.create(createGenreImageDto);
  }

  @Get()
  findAll() {
    return this.genreImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genreImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreImageDto: UpdateGenreImageDto) {
    return this.genreImagesService.update(+id, updateGenreImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genreImagesService.remove(+id);
  }
}
