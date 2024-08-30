import { Category } from '../entities/category.entity';
declare const CreateCategoryDto_base: import("@nestjs/common").Type<Pick<Category, "type" | "language" | "name" | "image" | "icon" | "parent" | "details">>;
export declare class CreateCategoryDto extends CreateCategoryDto_base {
}
export {};
