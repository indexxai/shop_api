import { Author } from '../entities/author.entity';
declare const CreateAuthorDto_base: import("@nestjs/common").Type<Omit<Author, "name" | "id" | "translated_languages" | "bio" | "socials" | "slug" | "born" | "cover_image" | "death" | "image" | "languages" | "products_count" | "quote">>;
export declare class CreateAuthorDto extends CreateAuthorDto_base {
    shop_id?: string;
}
export {};
