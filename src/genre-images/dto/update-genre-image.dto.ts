import { PartialType } from '@nestjs/swagger';
import { CreateGenreImageDto } from './create-genre-image.dto';

export class UpdateGenreImageDto extends PartialType(CreateGenreImageDto) {}
