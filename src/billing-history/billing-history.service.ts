import { Injectable } from "@nestjs/common";
import { CreateBillingHistoryDto } from "./dto/create-billing-history.dto";
import { UpdateBillingHistoryDto } from "./dto/update-billing-history.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BillingHistoryService {
  constructor(private prisma: PrismaService) {}

  create(createBillingHistoryDto: CreateBillingHistoryDto) {
    return this.prisma.billingHistory.create({
      data: {
        user: {
          connect: { id: createBillingHistoryDto.user_id },
        },
        subscription: {
          connect: { id: createBillingHistoryDto.subscription_id },
        },
        paymentMethod: {
          connect: { id: createBillingHistoryDto.payment_method_id },
        },
        ...createBillingHistoryDto,
      },
    });
  }

  findAll() {
    return this.prisma.billingHistory.findMany();
  }

  findOne(id: number) {
    return this.prisma.billingHistory.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBillingHistoryDto: UpdateBillingHistoryDto) {
    return this.prisma.billingHistory.update({
      where: { id },
      data: updateBillingHistoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.billingHistory.delete({
      where: { id },
    });
  }
}
