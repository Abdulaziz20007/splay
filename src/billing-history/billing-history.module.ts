import { Module } from "@nestjs/common";
import { BillingHistoryService } from "./billing-history.service";
import { BillingHistoryController } from "./billing-history.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [BillingHistoryController],
  providers: [BillingHistoryService],
  exports: [BillingHistoryService],
})
export class BillingHistoryModule {}
