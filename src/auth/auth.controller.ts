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

class AuthDto {
  email: string;
  password: string;
}

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("")
  async login(@Body() authDto: AuthDto, @Res() res: Response) {
    return this.authService.login(authDto.email, authDto.password, res);
  }

  @Post("")
  async register(@Body() authDto: AuthDto) {
    return this.authService.register(authDto.email, authDto.password);
  }

  @Post("admin")
  async adminLogin(@Body() authDto: AuthDto, @Res() res: Response) {
    return this.authService.adminLogin(authDto.email, authDto.password, res);
  }

  @Post("admin")
  async adminRegister(@Body() authDto: AuthDto, @Res() res: Response) {
    return this.authService.adminRegister(authDto.email, authDto.password);
  }
}
