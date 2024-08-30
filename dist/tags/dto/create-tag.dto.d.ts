import { Tag } from '../entities/tag.entity';
declare const CreateTagDto_base: import("@nestjs/common").Type<Pick<Tag, "type" | "language" | "name" | "image" | "icon" | "details">>;
export declare class CreateTagDto extends CreateTagDto_base {
}
export {};
