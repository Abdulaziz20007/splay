import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";
import { User, Admin } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}

  async getTokens(user: User | Admin) {
    if (user instanceof User) {
      const payload = {
        id: user.id,
        email: user.email,
      };

      const [accessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(payload, {
          secret: process.env.USER_ACCESS_TOKEN_KEY,
          expiresIn: process.env.ACCESS_TOKEN_TIME,
        }),

        this.jwtService.signAsync(payload, {
          secret: process.env.USER_REFRESH_TOKEN_KEY,
          expiresIn: process.env.REFRESH_TOKEN_TIME,
        }),
      ]);

      return {
        access_token: accessToken,
        refresh_token: refreshToken,
      };
    }
  }

  async validateUser(
    email: string,
    password: string,
    isAdmin: boolean = false
  ) {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return user;
  }

  async login(email: string, password: string, isAdmin: boolean = false) {
    const user = await this.validateUser(email, password, isAdmin);
    const payload = {
      sub: user.id,
      email: user.email,
      role: isAdmin ? "admin" : "user",
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  async register(email: string, password: string, isAdmin: boolean = false) {
    const exists = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (exists) {
      throw new ConflictException("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword,
        ...(isAdmin ? {} : { is_active: true }),
      },
    });

    const payload = {
      sub: user.id,
      email: user.email,
      role: isAdmin ? "admin" : "user",
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }
}
