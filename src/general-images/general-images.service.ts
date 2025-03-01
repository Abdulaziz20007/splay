import { Injectable } from '@nestjs/common';
import { CreateGeneralImageDto } from './dto/create-general-image.dto';
import { UpdateGeneralImageDto } from './dto/update-general-image.dto';

@Injectable()
export class GeneralImagesService {
  create(createGeneralImageDto: CreateGeneralImageDto) {
    return 'This action adds a new generalImage';
  }

  findAll() {
    return `This action returns all generalImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generalImage`;
  }

  update(id: number, updateGeneralImageDto: UpdateGeneralImageDto) {
    return `This action updates a #${id} generalImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} generalImage`;
  }
}
