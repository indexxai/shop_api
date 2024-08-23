import { StoreNotice } from '../entities/store-notices.entity';
declare const CreateStoreNoticeDto_base: import("@nestjs/common").Type<Pick<StoreNotice, "description" | "type" | "priority" | "notice" | "expired_at" | "effective_from" | "received_by">>;
export declare class CreateStoreNoticeDto extends CreateStoreNoticeDto_base {
}
export {};
