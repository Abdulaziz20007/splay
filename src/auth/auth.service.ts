import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";
import { User, Admin } from "@prisma/client";
import { Response } from "express";
import { AdminService } from "../admin/admin.service";
import { UserService } from "../user/user.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private adminService: AdminService,
    private userService: UserService
  ) {}

  COOKIE_OPTIONS = {
    httpOnly: true,
    maxAge: Number(process.env.COOKIE_TIME) || 15 * 24 * 60 * 60 * 1000,
  };

  async getTokens(user: User | Admin, isAdmin: boolean = false) {
    const payload = {
      id: user.id,
      email: user.email,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: isAdmin
          ? process.env.ADMIN_ACCESS_KEY
          : process.env.USER_ACCESS_KEY,
        expiresIn: process.env.ACCESS_TIME,
      }),

      this.jwtService.signAsync(payload, {
        secret: isAdmin
          ? process.env.ADMIN_REFRESH_KEY
          : process.env.USER_REFRESH_KEY,
        expiresIn: process.env.REFRESH_TIME,
      }),
    ]);

    return { accessToken, refreshToken };
  }

  async signin(loginDto: LoginDto, res: Response) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException("Email yoki parol noto'g'ri");
    }

    const checkPassword = await bcrypt.compare(
      loginDto.password,
      user.password_hash
    );
    if (!checkPassword) {
      throw new UnauthorizedException("Email yoki parol noto'g'ri");
    }

    if (!user.is_active) {
      throw new UnauthorizedException("User faol emas");
    }

    const tokens = await this.getTokens(user, false);

    res.cookie("refreshToken", tokens.refreshToken, this.COOKIE_OPTIONS);

    return {
      accessToken: tokens.accessToken,
      userId: user.id,
    };
  }

  async signup(registerDto: CreateUserDto) {
    const user = await this.userService.findByEmail(registerDto.email);

    if (user) {
      throw new ConflictException("Email avval ro'yxatdan otgan");
    }

    const createUserDto: CreateUserDto = {
      email: registerDto.email,
      password: registerDto.password,
    };

    const newUser = await this.userService.create(createUserDto);

    const response = {
      id: newUser.id,
      email: newUser.email,
      is_active: newUser.is_active,
    };

    return response;
  }

  async adminSignin(loginDto: LoginDto, res: Response) {
    const admin = await this.adminService.findByEmail(loginDto.email);
    if (!admin) {
      throw new UnauthorizedException("Admin topilmadi");
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      admin.password_hash
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException("Parol noto'g'ri");
    }

    const tokens = await this.getTokens(admin, true);

    res.cookie("refreshToken", tokens.refreshToken, this.COOKIE_OPTIONS);

    return {
      accessToken: tokens.accessToken,
      userId: admin.id,
    };
  }

  async adminSignup(registerDto: CreateAdminDto) {
    const existingAdmin = await this.adminService.findByEmail(
      registerDto.email
    );

    if (existingAdmin) {
      throw new ConflictException("Email allaqachon mavjud");
    }

    const createAdminDto: CreateAdminDto = {
      email: registerDto.email,
      password: registerDto.password,
      first_name: registerDto.first_name,
      last_name: registerDto.last_name,
    };

    const admin = await this.adminService.create(createAdminDto);
    const response = {
      id: admin.id,
      first_name: admin.first_name,
      last_name: admin.last_name,
      email: admin.email,
    };
    return response;
  }

  async signOut(userId: number, res: Response) {
    res.clearCookie("refreshToken");
    return { message: "Tizimdan chiqdingiz" };
  }

  async signOutAdmin(refreshToken: string, res: Response) {
    res.clearCookie("refreshToken");
    return { message: "Tizimdan chiqdingiz" };
  }

  async refreshToken(userId: number, refreshToken: string, res: Response) {
    res.clearCookie("refreshToken");

    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    const tokens = await this.getTokens(user, false);
    res.cookie("refreshToken", tokens.refreshToken, this.COOKIE_OPTIONS);

    return {
      accessToken: tokens.accessToken,
      userId: user.id,
    };
  }

  async refreshTokenAdmin(userId: number, refreshToken: string, res: Response) {
    res.clearCookie("refreshToken");

    const admin = await this.adminService.findOne(userId);
    if (!admin) {
      throw new UnauthorizedException("Admin not found");
    }

    const tokens = await this.getTokens(admin, true);
    res.cookie("refreshToken", tokens.refreshToken, this.COOKIE_OPTIONS);

    return {
      accessToken: tokens.accessToken,
      userId: admin.id,
    };
  }
}
