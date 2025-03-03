import { Module } from "@nestjs/common";
import { ContentGenresService } from "./content-genres.service";
import { ContentGenresController } from "./content-genres.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [ContentGenresController],
  providers: [ContentGenresService, PrismaService],
})
export class ContentGenresModule {}
