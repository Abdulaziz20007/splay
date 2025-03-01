import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { AuthService } from "./auth.service";

class AuthDto {
  email: string;
  password: string;
}

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("")
  async login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto.email, authDto.password);
  }

  @Post("")
  async register(@Body() authDto: AuthDto) {
    return this.authService.register(authDto.email, authDto.password);
  }

  @Post("admin")
  async adminLogin(@Body() authDto: AuthDto) {
    return this.authService.login(authDto.email, authDto.password, true);
  }

  @Post("admin")
  async adminRegister(@Body() authDto: AuthDto) {
    return this.authService.register(authDto.email, authDto.password, true);
  }
}
