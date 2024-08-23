import { Withdraw } from '../entities/withdraw.entity';
declare const CreateWithdrawDto_base: import("@nestjs/common").Type<Pick<Withdraw, "payment_method" | "amount" | "shop_id" | "details" | "note">>;
export declare class CreateWithdrawDto extends CreateWithdrawDto_base {
}
export {};
