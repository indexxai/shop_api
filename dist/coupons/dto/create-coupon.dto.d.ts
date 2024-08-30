import { Coupon } from '../entities/coupon.entity';
declare const CreateCouponDto_base: import("@nestjs/common").Type<Pick<Coupon, "type" | "language" | "description" | "image" | "code" | "minimum_cart_amount" | "amount" | "active_from" | "expire_at" | "target">>;
export declare class CreateCouponDto extends CreateCouponDto_base {
}
export {};
