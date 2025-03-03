import { Injectable } from "@nestjs/common";
import { CreatePaymentMethodDto } from "./dto/create-payment-method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment-method.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PaymentMethodService {
  constructor(private prismaService: PrismaService) {}
  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.prismaService.paymentMethod.create({
      data: {
        ...createPaymentMethodDto,
      },
    });
  }

  findAll() {
    return this.prismaService.paymentMethod.findMany();
  }

  findOne(id: number) {
    return this.prismaService.paymentMethod.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.prismaService.paymentMethod.update({
      where: { id },
      data: {
        ...updatePaymentMethodDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.paymentMethod.delete({
      where: { id },
    });
  }
}
