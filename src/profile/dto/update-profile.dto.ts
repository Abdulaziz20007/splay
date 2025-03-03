import { PartialType } from "@nestjs/mapped-types";
import { CreateProfileDto } from "./create-profile.dto";

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  name?: string;
  user_id?: number;
  language_id?: number;
  age?: number;
  password?: string;
  avatar?: string;
  is_active?: boolean;
  is_main?: boolean;
}
