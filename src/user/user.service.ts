import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { hash } from "bcrypt";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  bcryptRounds = Number(process.env.BCRYPT_ROUNDS);

  async create(createUserDto: CreateUserDto) {
    const password_hash = await hash(createUserDto.password, this.bcryptRounds);

    const { password, ...userData } = createUserDto;

    return this.prisma.user.create({
      data: {
        ...userData,
        password_hash,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const data: any = { ...updateUserDto };

    if (updateUserDto.password) {
      data.password_hash = await hash(
        updateUserDto.password,
        this.bcryptRounds
      );
      delete data.password;
    }

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
