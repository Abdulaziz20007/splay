import { Injectable } from "@nestjs/common";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SubscriptionService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    const plan = await this.prismaService.subscriptionPlan.findUnique({
      where: { id: createSubscriptionDto.plan_id },
    });

    if (!plan) {
      throw new Error("Plan topilmadi");
    }

    return this.prismaService.subscription.create({
      data: {
        ...createSubscriptionDto,
        start_date: new Date(),
        end_date: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
        is_active: true,
      },
    });
  }

  findAll() {
    return this.prismaService.subscription.findMany({
      include: {
        profile: true,
        plan: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.subscription.findUnique({
      where: { id },
      include: {
        profile: true,
        plan: true,
      },
    });
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.prismaService.subscription.update({
      where: { id },
      data: updateSubscriptionDto,
      include: {
        profile: true,
        plan: true,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.subscription.delete({
      where: { id },
      include: {
        profile: true,
        plan: true,
      },
    });
  }
}
