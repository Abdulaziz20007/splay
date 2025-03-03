import { Module } from "@nestjs/common";
import { CategoryContentService } from "./category-content.service";
import { CategoryContentController } from "./category-content.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [CategoryContentController],
  providers: [CategoryContentService, PrismaService],
})
export class CategoryContentModule {}
