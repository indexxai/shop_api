"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const product_entity_1 = require("./entities/product.entity");
const paginate_1 = require("../common/pagination/paginate");
const products_json_1 = __importDefault(require("../db/pickbazar/products.json"));
const popular_products_json_1 = __importDefault(require("../db/pickbazar/popular-products.json"));
const best_selling_products_json_1 = __importDefault(require("../db/pickbazar/best-selling-products.json"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const products = (0, class_transformer_1.plainToClass)(product_entity_1.Product, products_json_1.default);
const popularProducts = (0, class_transformer_1.plainToClass)(product_entity_1.Product, popular_products_json_1.default);
const bestSellingProducts = (0, class_transformer_1.plainToClass)(product_entity_1.Product, best_selling_products_json_1.default);
const options = {
    keys: [
        'name',
        'type.slug',
        'categories.slug',
        'status',
        'shop_id',
        'author.slug',
        'tags',
        'manufacturer.slug',
    ],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(products, options);
let ProductsService = class ProductsService {
    constructor() {
        this.products = products;
        this.popularProducts = popularProducts;
        this.bestSellingProducts = bestSellingProducts;
    }
    create(createProductDto) {
        return this.products[0];
    }
    getProducts({ limit, page, search }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.products;
        let slugValue = '';
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
                if (key === "categories.slug") {
                    slugValue = value;
                }
            }
            data = (_a = fuse
                .search({
                $and: searchText,
            })) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        console.log("before data", data.length);
        if (slugValue) {
            if (slugValue === 'power-pack') {
                console.log("true in power");
                data = data.filter(product => product.categories.some(category => category.slug === 'power-pack'));
            }
            else if (slugValue === 'token-pack') {
                console.log("true in token");
                data = data.filter(product => product.categories.some(category => category.slug === 'token-pack'));
            }
        }
        console.log("after data", data.length);
        const results = data.slice(startIndex, endIndex);
        const url = `/products?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getProductBySlug(slug) {
        const product = this.products.find((p) => p.slug === slug);
        const related_products = this.products
            .filter((p) => p.type.slug === product.type.slug)
            .slice(0, 20);
        return Object.assign(Object.assign({}, product), { related_products });
    }
    getPopularProducts({ limit, type_slug }) {
        var _a;
        let data = this.popularProducts;
        if (type_slug) {
            data = (_a = fuse.search(type_slug)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        return data === null || data === void 0 ? void 0 : data.slice(0, limit);
    }
    getBestSellingProducts({ limit, type_slug }) {
        var _a;
        let data = this.bestSellingProducts;
        if (type_slug) {
            data = (_a = fuse.search(type_slug)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        return data === null || data === void 0 ? void 0 : data.slice(0, limit);
    }
    getProductsStock({ limit, page, search }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.products.filter((item) => item.quantity <= 9);
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
            }
            data = (_a = fuse
                .search({
                $and: searchText,
            })) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/products-stock?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getDraftProducts({ limit, page, search }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.products.filter((item) => item.status === 'draft');
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
            }
            data = (_a = fuse
                .search({
                $and: searchText,
            })) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/draft-products?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    update(id, updateProductDto) {
        return this.products[0];
    }
    remove(id) {
        return `This action removes a #${id} product`;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map