import { Manufacturer } from '../entities/manufacturer.entity';
declare const CreateManufacturerDto_base: import("@nestjs/common").Type<Omit<Manufacturer, "type" | "translated_languages" | "products_count" | "name" | "slug" | "description" | "cover_image" | "socials" | "image" | "type_id" | "id" | "website">>;
export declare class CreateManufacturerDto extends CreateManufacturerDto_base {
    shop_id?: string;
}
export {};
