import { Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { hash } from "bcrypt";

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}
  bcryptRounds = Number(process.env.BCRYPT_ROUNDS);

  async create(createAdminDto: CreateAdminDto) {
    const password_hash = await hash(
      createAdminDto.password,
      this.bcryptRounds
    );

    const { password, ...adminData } = createAdminDto;

    return this.prisma.admin.create({
      data: {
        ...adminData,
        password_hash,
      },
    });
  }

  findAll() {
    return this.prisma.admin.findMany();
  }

  findByEmail(email: string) {
    return this.prisma.admin.findUnique({
      where: { email },
    });
  }

  findOne(id: number) {
    return this.prisma.admin.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.prisma.admin.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  remove(id: number) {
    return this.prisma.admin.delete({
      where: { id },
    });
  }
}
