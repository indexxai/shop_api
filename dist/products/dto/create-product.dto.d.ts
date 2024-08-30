import { Product } from '../entities/product.entity';
declare const CreateProductDto_base: import("@nestjs/common").Type<Omit<Product, "created_at" | "updated_at" | "type" | "translated_languages" | "slug" | "pivot" | "shop" | "orders" | "categories" | "tags" | "related_products" | "id">>;
export declare class CreateProductDto extends CreateProductDto_base {
    categories: number[];
    tags: number[];
}
export {};
