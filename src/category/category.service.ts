import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    const data = { ...createCategoryDto };

    // Only add parentCategory connection if parentCategoryId is provided
    if (createCategoryDto.parentCategoryId) {
      Object.assign(data, {
        parentCategory: {
          connect: { id: createCategoryDto.parentCategoryId },
        },
      });
    }

    return this.prisma.category.create({
      data,
    });
  }

  findAll() {
    return this.prisma.category.findMany({
      include: {
        parentCategory: true,
        childCategories: true,
        _count: {
          select: {
            contents: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
      include: {
        parentCategory: true,
        childCategories: true,
        contents: {
          include: {
            content: true,
          },
        },
      },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const data = { ...updateCategoryDto };

    // Handle parent category reference if needed
    if (updateCategoryDto.parentCategoryId) {
      Object.assign(data, {
        parentCategory: {
          connect: { id: updateCategoryDto.parentCategoryId },
        },
      });
    }

    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
