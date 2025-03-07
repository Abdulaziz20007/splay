import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { APP_GUARD } from "@nestjs/core";
import { AccessTokenAdminGuard } from "../common/guards";

@Module({
  controllers: [AdminController],
  providers: [
    AdminService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AccessTokenAdminGuard,
    },
  ],
  exports: [AdminService],
})
export class AdminModule {}
