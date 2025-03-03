import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { LoginDto } from "./dto/login.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { CreateUserDto } from "../user/dto/create-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin")
  async signin(@Body() loginDto: LoginDto, @Res() res: Response) {
    const result = await this.authService.signin(loginDto, res);
    return res.json(result);
  }

  @Post("signup")
  async signup(@Body() registerDto: CreateUserDto) {
    return this.authService.signup(registerDto);
  }

  @Post("admin/signin")
  async adminSignin(@Body() loginDto: LoginDto, @Res() res: Response) {
    const result = await this.authService.adminSignin(loginDto, res);
    return res.json(result);
  }

  @Post("admin/signup")
  async adminSignup(@Body() registerDto: CreateAdminDto) {
    return this.authService.adminSignup(registerDto);
  }
}
