import { Injectable } from "@nestjs/common";
import { CreateContentGenreDto } from "./dto/create-content-genre.dto";
import { UpdateContentGenreDto } from "./dto/update-content-genre.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ContentGenresService {
  constructor(private prismaService: PrismaService) {}
  create(createContentGenreDto: CreateContentGenreDto) {
    return this.prismaService.contentGenre.create({
      data: {
        ...createContentGenreDto,
      },
    });
  }

  findAll() {
    return this.prismaService.contentGenre.findMany({
      include: {
        content: true,
        genre: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.contentGenre.findUnique({
      where: { id },
      include: {
        content: true,
        genre: true,
      },
    });
  }

  update(id: number, updateContentGenreDto: UpdateContentGenreDto) {
    return this.prismaService.contentGenre.update({
      where: { id },
      data: {
        ...updateContentGenreDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.contentGenre.delete({
      where: { id },
      include: {
        content: true,
        genre: true,
      },
    });
  }
}
