export class CreateSubscriptionPlanDto {
  name: string;
  description: string;
  monthly_price: number;
  max_profile: number;
  max_screen: number;
  download_enabled: boolean;
  ads_enabled: boolean;
  is_active: boolean;
}
