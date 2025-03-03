import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    const data = { ...createCategoryDto };
    if (createCategoryDto.parentCategoryId) {
      data.parentCategoryId = createCategoryDto.parentCategoryId;
    }
    return this.prismaService.category.create({
      data,
    });
  }

  findAll() {
    return this.prismaService.category.findMany({
      include: {
        parentCategory: true,
        childCategories: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.category.findUnique({
      where: { id },
      include: {
        parentCategory: true,
        childCategories: true,
      },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const data = { ...updateCategoryDto };

    if (updateCategoryDto.parentCategoryId) {
      data.parentCategoryId = updateCategoryDto.parentCategoryId;
    }

    return this.prismaService.category.update({
      where: { id },
      data,
      include: {
        parentCategory: true,
        childCategories: true,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.category.delete({
      where: { id },
    });
  }
}
