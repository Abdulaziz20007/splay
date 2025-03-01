import { Module } from '@nestjs/common';
import { GeneralImagesService } from './general-images.service';
import { GeneralImagesController } from './general-images.controller';

@Module({
  controllers: [GeneralImagesController],
  providers: [GeneralImagesService],
})
export class GeneralImagesModule {}
