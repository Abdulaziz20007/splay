import { Module } from "@nestjs/common";
import { SubscriptionPlansService } from "./subscription-plans.service";
import { SubscriptionPlansController } from "./subscription-plans.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [SubscriptionPlansController],
  providers: [SubscriptionPlansService, PrismaService],
})
export class SubscriptionPlansModule {}
