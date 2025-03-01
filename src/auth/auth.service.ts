import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";
import { User, Admin } from "@prisma/client";
import { Response } from "express";

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}

  async getTokens(user: User | Admin, isAdmin: boolean = false) {
    const payload = {
      id: user.id,
      email: user.email,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: isAdmin
          ? process.env.ADMIN_ACCESS_TOKEN_KEY
          : process.env.USER_ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),

      this.jwtService.signAsync(payload, {
        secret: isAdmin
          ? process.env.ADMIN_REFRESH_TOKEN_KEY
          : process.env.USER_REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);

    return { accessToken, refreshToken };
  }

  async login(email: string, password: string, res: Response) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException("User topilmadi");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Parol noto'g'ri");
    }

    if (!user.is_active) {
      throw new UnauthorizedException("User faol emas");
    }

    const tokens = await this.getTokens(user, false);

    res.cookie("accessToken", tokens.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });

    return {
      accessToken: tokens.accessToken,
      userId: user.id,
    };
  }

  async register(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (user) {
      throw new ConflictException("Email allaqachon mavjud");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.prismaService.user.create({
      data: {
        email,
        password_hash: hashedPassword,
        is_active: true,
      },
    });

    const payload = {
      id: newUser.id,
      email: newUser.email,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      userId: newUser.id,
    };
  }

  async adminLogin(email: string, password: string, res: Response) {
    const admin = await this.prismaService.admin.findUnique({
      where: { email },
    });
    if (!admin) {
      throw new UnauthorizedException("Admin topilmadi");
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Parol noto'g'ri");
    }

    const tokens = await this.getTokens(admin, true);

    res.cookie("accessToken", tokens.accessToken, {
      httpOnly: true,
    });

    return {
      accessToken: tokens.accessToken,
      userId: admin.id,
    };
  }

  async adminRegister(email: string, password: string) {
    const exists = await this.prismaService.admin.findUnique({
      where: { email },
    });

    if (exists) {
      throw new ConflictException("Email allaqachon mavjud");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await this.prismaService.admin.create({
      data: {
        email,
        password_hash: hashedPassword,
        username: email,
        first_name: email,
      },
    });
  }
}
