import { Injectable } from "@nestjs/common";
import { CreateSubscriptionPlanDto } from "./dto/create-subscription-plan.dto";
import { UpdateSubscriptionPlanDto } from "./dto/update-subscription-plan.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SubscriptionPlansService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    return this.prismaService.subscriptionPlan.create({
      data: {
        ...createSubscriptionPlanDto,
      },
    });
  }

  findAll() {
    return this.prismaService.subscriptionPlan.findMany();
  }

  findOne(id: number) {
    return this.prismaService.subscriptionPlan.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSubscriptionPlanDto: UpdateSubscriptionPlanDto) {
    return this.prismaService.subscriptionPlan.update({
      where: { id },
      data: updateSubscriptionPlanDto,
    });
  }

  remove(id: number) {
    return this.prismaService.subscriptionPlan.delete({
      where: { id },
    });
  }
}
