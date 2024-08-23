import { Manufacturer } from '../entities/manufacturer.entity';
declare const CreateManufacturerDto_base: import("@nestjs/common").Type<Omit<Manufacturer, "name" | "id" | "description" | "type" | "translated_languages" | "socials" | "slug" | "cover_image" | "image" | "products_count" | "type_id" | "website">>;
export declare class CreateManufacturerDto extends CreateManufacturerDto_base {
    shop_id?: string;
}
export {};
