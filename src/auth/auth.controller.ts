import {
  Controller,
  Post,
  Body,
  Res,
  UseGuards,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { LoginDto } from "./dto/login.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { CookieGetter } from "../decorators/cookie-getter.decorator";
import { GetCurrentUserId } from "../common/decorators/get-current-user-id.decorator";
import { GetCurrentUser } from "../common/decorators/get-current-user.decorator";
import { JwtPayloadWithRefreshToken } from "../common/types";
import { ResponseFields } from "../types";
import { AuthGuard } from "@nestjs/passport";
import { Public } from "../common/decorators";
import { RefreshTokenAdminGuard, RefreshTokenGuard } from "../common/guards";

UseGuards(AuthGuard);
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post("signin")
  async signin(@Body() loginDto: LoginDto, @Res() res: Response) {
    const result = await this.authService.signin(loginDto, res);
    return res.json(result);
  }

  @Public()
  @Post("signup")
  async signup(@Body() registerDto: CreateUserDto) {
    return this.authService.signup(registerDto);
  }

  @Public()
  @Post("admin/signin")
  async adminSignin(@Body() loginDto: LoginDto, @Res() res: Response) {
    const result = await this.authService.adminSignin(loginDto, res);
    return res.json(result);
  }

  @Public()
  @Post("admin/signup")
  async adminSignup(@Body() registerDto: CreateAdminDto) {
    return this.authService.adminSignup(registerDto);
  }

  @UseGuards(RefreshTokenGuard)
  @Post("signout")
  @HttpCode(HttpStatus.OK)
  signout(
    @GetCurrentUserId() userId: number,
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOut(+userId, res);
  }

  @UseGuards(RefreshTokenAdminGuard)
  @HttpCode(200)
  @Post("signout-admin")
  signoutAdmin(
    @GetCurrentUserId() userId: number,
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOutAdmin(refreshToken, res);
  }

  @UseGuards(RefreshTokenGuard)
  @HttpCode(200)
  @Post("refresh")
  refresh(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser("refreshToken") refreshToken: string,
    @GetCurrentUser() user: JwtPayloadWithRefreshToken,
    @Res({ passthrough: true }) res: Response
  ): Promise<ResponseFields> {
    return this.authService
      .refreshToken(+userId, refreshToken, res)
      .then((response) => ({
        id: response.userId,
        access_token: response.accessToken,
      }));
  }

  @UseGuards(RefreshTokenAdminGuard)
  @HttpCode(200)
  @Post("refresh-admin")
  refreshAdmin(
    @GetCurrentUserId() userId: number,
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ): Promise<ResponseFields> {
    return this.authService
      .refreshTokenAdmin(userId, refreshToken, res)
      .then((response) => ({
        id: response.userId,
        access_token: response.accessToken,
      }));
  }
}
