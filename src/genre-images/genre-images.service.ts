import { Injectable } from "@nestjs/common";
import { CreateGenreImageDto } from "./dto/create-genre-image.dto";
import { UpdateGenreImageDto } from "./dto/update-genre-image.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GenreImagesService {
  constructor(private prismaService: PrismaService) {}
  create(createGenreImageDto: CreateGenreImageDto) {
    return this.prismaService.genreImage.create({
      data: {
        ...createGenreImageDto,
      },
    });
  }

  findAll() {
    return this.prismaService.genreImage.findMany({
      include: {
        genre: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.genreImage.findUnique({
      where: { id },
      include: {
        genre: true,
      },
    });
  }

  update(id: number, updateGenreImageDto: UpdateGenreImageDto) {
    return this.prismaService.genreImage.update({
      where: { id },
      data: {
        ...updateGenreImageDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.genreImage.delete({
      where: { id },
      include: {
        genre: true,
      },
    });
  }
}
