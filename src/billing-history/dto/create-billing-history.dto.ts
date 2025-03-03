export class CreateBillingHistoryDto {
    user_id: number;
    subscription_id: number;
    payment_method_id: number;
    amount: number;
    status: string;
    created_at: Date;
    updated_at: Date;
}
