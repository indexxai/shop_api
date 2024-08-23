import { Product } from '../entities/product.entity';
declare const CreateProductDto_base: import("@nestjs/common").Type<Omit<Product, "created_at" | "updated_at" | "id" | "type" | "translated_languages" | "slug" | "shop" | "categories" | "orders" | "pivot" | "tags" | "related_products">>;
export declare class CreateProductDto extends CreateProductDto_base {
    categories: number[];
    tags: number[];
}
export {};
