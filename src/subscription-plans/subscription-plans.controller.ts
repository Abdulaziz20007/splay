import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SubscriptionPlansService } from "./subscription-plans.service";
import { CreateSubscriptionPlanDto } from "./dto/create-subscription-plan.dto";
import { UpdateSubscriptionPlanDto } from "./dto/update-subscription-plan.dto";
import { Public } from "../common/decorators";

@Controller("subscription-plans")
export class SubscriptionPlansController {
  constructor(
    private readonly subscriptionPlansService: SubscriptionPlansService
  ) {}

  @Post()
  create(@Body() createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    return this.subscriptionPlansService.create(createSubscriptionPlanDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.subscriptionPlansService.findAll();
  }

  @Public()
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.subscriptionPlansService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSubscriptionPlanDto: UpdateSubscriptionPlanDto
  ) {
    return this.subscriptionPlansService.update(+id, updateSubscriptionPlanDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.subscriptionPlansService.remove(+id);
  }
}
