import { Module } from '@nestjs/common';
import { BillingHistoryService } from './billing-history.service';
import { BillingHistoryController } from './billing-history.controller';

@Module({
  controllers: [BillingHistoryController],
  providers: [BillingHistoryService],
})
export class BillingHistoryModule {}
