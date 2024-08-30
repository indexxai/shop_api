import { Address } from '../entities/address.entity';
declare const CreateAddressDto_base: import("@nestjs/common").Type<Pick<Address, "title" | "default" | "address" | "type">>;
export declare class CreateAddressDto extends CreateAddressDto_base {
    'customer_id': number;
}
export {};
