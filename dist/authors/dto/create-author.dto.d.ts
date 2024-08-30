import { Author } from '../entities/author.entity';
declare const CreateAuthorDto_base: import("@nestjs/common").Type<Omit<Author, "translated_languages" | "products_count" | "name" | "slug" | "cover_image" | "bio" | "socials" | "image" | "id" | "born" | "death" | "languages" | "quote">>;
export declare class CreateAuthorDto extends CreateAuthorDto_base {
    shop_id?: string;
}
export {};
