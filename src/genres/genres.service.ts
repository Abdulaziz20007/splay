import { Injectable } from "@nestjs/common";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GenresService {
  constructor(private prismaService: PrismaService) {}
  create(createGenreDto: CreateGenreDto) {
    return this.prismaService.genre.create({
      data: {
        ...createGenreDto,
      },
    });
  }

  findAll() {
    return this.prismaService.genre.findMany();
  }

  findOne(id: number) {
    return this.prismaService.genre.findUnique({
      where: { id },
    });
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return this.prismaService.genre.update({
      where: { id },
      data: {
        ...updateGenreDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.genre.delete({
      where: { id },
    });
  }
}
