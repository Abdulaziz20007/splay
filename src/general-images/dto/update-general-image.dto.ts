import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneralImageDto } from './create-general-image.dto';

export class UpdateGeneralImageDto extends PartialType(CreateGeneralImageDto) {}
