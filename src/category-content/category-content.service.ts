import { Injectable } from '@nestjs/common';
import { CreateCategoryContentDto } from './dto/create-category-content.dto';
import { UpdateCategoryContentDto } from './dto/update-category-content.dto';

@Injectable()
export class CategoryContentService {
  create(createCategoryContentDto: CreateCategoryContentDto) {
    return 'This action adds a new categoryContent';
  }

  findAll() {
    return `This action returns all categoryContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryContent`;
  }

  update(id: number, updateCategoryContentDto: UpdateCategoryContentDto) {
    return `This action updates a #${id} categoryContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryContent`;
  }
}
