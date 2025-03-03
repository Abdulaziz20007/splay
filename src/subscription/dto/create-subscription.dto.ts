export class CreateSubscriptionDto {
  profile_id: number;
  plan_id: number;
  auto_renew: boolean;
  last_amount_paid: number;
  subscription_source: string;
}
