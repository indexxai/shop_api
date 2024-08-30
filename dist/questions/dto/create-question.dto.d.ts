import { Question } from '../entities/question.entity';
declare const CreateQuestionDto_base: import("@nestjs/common").Type<Omit<Question, "created_at" | "updated_at" | "user" | "product" | "id">>;
export declare class CreateQuestionDto extends CreateQuestionDto_base {
}
export {};
