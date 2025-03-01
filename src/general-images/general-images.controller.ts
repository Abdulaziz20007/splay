import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneralImagesService } from './general-images.service';
import { CreateGeneralImageDto } from './dto/create-general-image.dto';
import { UpdateGeneralImageDto } from './dto/update-general-image.dto';

@Controller('general-images')
export class GeneralImagesController {
  constructor(private readonly generalImagesService: GeneralImagesService) {}

  @Post()
  create(@Body() createGeneralImageDto: CreateGeneralImageDto) {
    return this.generalImagesService.create(createGeneralImageDto);
  }

  @Get()
  findAll() {
    return this.generalImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneralImageDto: UpdateGeneralImageDto) {
    return this.generalImagesService.update(+id, updateGeneralImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalImagesService.remove(+id);
  }
}
