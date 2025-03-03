import { Module } from "@nestjs/common";
import { GenreImagesService } from "./genre-images.service";
import { GenreImagesController } from "./genre-images.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [GenreImagesController],
  providers: [GenreImagesService, PrismaService],
  exports: [GenreImagesService],
})
export class GenreImagesModule {}
