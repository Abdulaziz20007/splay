import { Module } from '@nestjs/common';
import { CategoryContentService } from './category-content.service';
import { CategoryContentController } from './category-content.controller';

@Module({
  controllers: [CategoryContentController],
  providers: [CategoryContentService],
})
export class CategoryContentModule {}
