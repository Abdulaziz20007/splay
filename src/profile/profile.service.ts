import { Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) {}
  bcryptRounds = Number(process.env.BCRYPT_ROUNDS);

  async create(createProfileDto: CreateProfileDto) {
    const { password, ...profileData } = createProfileDto;

    const password_hash = await bcrypt.hash(password, this.bcryptRounds);

    const userProfiles = await this.prismaService.profile.findMany({
      where: {
        user_id: profileData.user_id,
      },
    });

    const profile = await this.prismaService.profile.create({
      data: {
        ...profileData,
        password_hash,
        is_main: userProfiles.length === 0 ? true : false,
      },
    });

    const { password_hash: _, ...profileWithoutPassword } = profile;

    return profileWithoutPassword;
  }

  findAll() {
    return this.prismaService.profile.findMany({
      include: {
        user: true,
        language: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.profile.findUnique({
      where: { id },
      include: {
        user: true,
        language: true,
      },
    });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    const data: any = { ...updateProfileDto };
    
    if (updateProfileDto.password) {
      data.password_hash = await bcrypt.hash(updateProfileDto.password, this.bcryptRounds);
      delete data.password;
    }
    
    return this.prismaService.profile.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prismaService.profile.delete({
      where: { id },
    });
  }
}
