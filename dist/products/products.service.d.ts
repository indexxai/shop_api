import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsDto, ProductPaginator } from './dto/get-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { GetPopularProductsDto } from './dto/get-popular-products.dto';
import { GetBestSellingProductsDto } from './dto/get-best-selling-products.dto';
export declare class ProductsService {
    private products;
    private popularProducts;
    private bestSellingProducts;
    create(createProductDto: CreateProductDto): any;
    getProducts({ limit, page, search }: GetProductsDto): ProductPaginator;
    getProductBySlug(slug: string): Product;
    getPopularProducts({ limit, type_slug }: GetPopularProductsDto): Product[];
    getBestSellingProducts({ limit, type_slug }: GetBestSellingProductsDto): Product[];
    getProductsStock({ limit, page, search }: GetProductsDto): ProductPaginator;
    getDraftProducts({ limit, page, search }: GetProductsDto): ProductPaginator;
    update(id: number, updateProductDto: UpdateProductDto): any;
    remove(id: number): string;
}
