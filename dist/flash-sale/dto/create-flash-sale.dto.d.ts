import { FlashSale } from '../entities/flash-sale.entity';
declare const CreateFlashSaleDto_base: import("@nestjs/common").Type<Pick<FlashSale, "description" | "type" | "title" | "products" | "end_date" | "start_date" | "sale_builder">>;
export declare class CreateFlashSaleDto extends CreateFlashSaleDto_base {
}
export {};
