import { Injectable } from "@nestjs/common";
import { CreateCategoryContentDto } from "./dto/create-category-content.dto";
import { UpdateCategoryContentDto } from "./dto/update-category-content.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoryContentService {
  constructor(private prismaService: PrismaService) {}
  create(createCategoryContentDto: CreateCategoryContentDto) {
    return this.prismaService.categoryContent.create({
      data: {
        ...createCategoryContentDto,
      },
    });
  }

  findAll() {
    return this.prismaService.categoryContent.findMany();
  }

  findOne(id: number) {
    return this.prismaService.categoryContent.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCategoryContentDto: UpdateCategoryContentDto) {
    return this.prismaService.categoryContent.update({
      where: { id },
      data: {
        ...updateCategoryContentDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.categoryContent.delete({
      where: { id },
    });
  }
}
