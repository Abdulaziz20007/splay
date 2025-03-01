import { Injectable } from '@nestjs/common';
import { CreateBillingHistoryDto } from './dto/create-billing-history.dto';
import { UpdateBillingHistoryDto } from './dto/update-billing-history.dto';

@Injectable()
export class BillingHistoryService {
  create(createBillingHistoryDto: CreateBillingHistoryDto) {
    return 'This action adds a new billingHistory';
  }

  findAll() {
    return `This action returns all billingHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billingHistory`;
  }

  update(id: number, updateBillingHistoryDto: UpdateBillingHistoryDto) {
    return `This action updates a #${id} billingHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} billingHistory`;
  }
}
