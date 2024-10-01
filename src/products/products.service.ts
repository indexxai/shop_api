import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsDto, ProductPaginator } from './dto/get-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { paginate } from 'src/common/pagination/paginate';
import productsJson from '@db/products.json';
import popularProductsJson from '@db/popular-products.json';
import bestSellingProductsJson from '@db/best-selling-products.json';
import Fuse from 'fuse.js';
import { GetPopularProductsDto } from './dto/get-popular-products.dto';
import { GetBestSellingProductsDto } from './dto/get-best-selling-products.dto';

const products = plainToClass(Product, productsJson);
const popularProducts = plainToClass(Product, popularProductsJson);
const bestSellingProducts = plainToClass(Product, bestSellingProductsJson);

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
const fuse = new Fuse(products, options);

@Injectable()
export class ProductsService {
  private products: any = products;
  private popularProducts: any = popularProducts;
  private bestSellingProducts: any = bestSellingProducts;

  create(createProductDto: CreateProductDto) {
    return this.products[0];
  }

  getProducts0({ limit, page, search }: GetProductsDto): ProductPaginator {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let data: Product[] = this.products;
    let slugValue = '';
    if (search) {
      const parseSearchParams = search.split(';');
      const searchText: any = [];
      console.log('searchJoin in 0', parseSearchParams);
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');
        // TODO: Temp Solution
        if (key !== 'slug') {
          searchText.push({
            [key]: value,
          });
        }
        if (key === 'categories.slug') {
          slugValue = value;
        }
      }

      data = fuse
        .search({
          $and: searchText,
        })
        ?.map(({ item }) => item);
    }

    console.log('before data', data.length);
    if (slugValue) {
      if (slugValue === 'power-pack') {
        console.log('true in power');
        // Filter products where any category's slug is 'power-pack'
        data = data.filter((product) =>
          product.categories.some((category) => category.slug === 'power-pack'),
        );
      } else if (slugValue === 'token-pack') {
        console.log('true in token');
        // Filter products with slug 'token-pack'
        data = data.filter((product) =>
          product.categories.some((category) => category.slug === 'token-pack'),
        );
      }
    }
    console.log('after data', data.length);
    if (slugValue) {
      // Sort the data by the `name` property using natural sorting
      data.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          numeric: true,
          sensitivity: 'base',
        }),
      );
    }

    const results = data.slice(startIndex, endIndex);
    const url = `/products?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }

  getProducts1({ limit, page, search }: GetProductsDto): ProductPaginator {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let data: Product[] = this.products;
    let slugValue = '';
    let hasName = false; // Flag to detect if 'name' is present
    let nameValue = ''; // Store the name value for exact matching
    const searchText: any = [];

    if (search) {
      const parseSearchParams = search.split(';');
      console.log('searchJoin', parseSearchParams);

      // First loop to detect if 'name' is in the search
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');

        // If 'name' exists in the search, set flag and store the value
        if (key === 'name') {
          hasName = true;
          nameValue = value;
        }
      }

      // Second loop to construct the search query
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');

        if (!hasName) {
          // Normal behavior when 'name' is not present
          if (key !== 'slug') {
            searchText.push({
              [key]: value,
            });
          }

          // Capture slug value for further filtering if necessary
          if (key === 'categories.slug') {
            slugValue = value;
          }
        }
      }

      console.log('searchText', searchText, data.length);
      // If 'name' is present, perform a "starts with" search (like search)
      if (hasName) {
        const nameRegex = new RegExp(`^${nameValue}`, 'i'); // Case-insensitive starts with
        data = data.filter((product) => nameRegex.test(product.name));
      } else {
        // Perform a general search using other fields (excluding name)
        data = fuse
          .search({
            $and: searchText,
          })
          ?.map(({ item }) => item);
      }
    }

    console.log('before data', data.length);

    // If 'name' is not found, apply slug filtering
    if (!hasName && slugValue) {
      if (slugValue === 'power-pack') {
        console.log('true in power');
        data = data.filter((product) =>
          product.categories.some((category) => category.slug === 'power-pack'),
        );
      } else if (slugValue === 'token-pack') {
        console.log('true in token');
        data = data.filter((product) =>
          product.categories.some((category) => category.slug === 'token-pack'),
        );
      }
    }

    console.log('after data', data.length);

    if (slugValue || hasName) {
      // Sort data by name if applicable
      data.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          numeric: true,
          sensitivity: 'base',
        }),
      );
    }

    // Paginate the results
    const results = data.slice(startIndex, endIndex);
    const url = `/products?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }

  getProducts({ limit, page, search }: GetProductsDto): ProductPaginator {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let data: Product[] = this.products;
    let slugValue = '';
    let hasName = false; // Flag to detect if 'name' is present
    let nameValue = ''; // Store the name value for partial matching
    const searchText: any = [];
  
    if (search) {
      const parseSearchParams = search.split(';');
      console.log('searchJoin', parseSearchParams);
  
      // First loop to detect if 'name' is in the search
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');
  
        // If 'name' exists in the search, set flag and store the value
        if (key === 'name') {
          hasName = true;
          nameValue = value;
        }
      }
  
      // Second loop to construct the search query
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');
  
        // Capture slug value for further filtering if necessary
        if (key === 'categories.slug') {
          slugValue = value;
        }
  
        // Include other search params unless it's 'slug'
        if (key !== 'slug') {
          searchText.push({
            [key]: value,
          });
        }
      }
  
      console.log('searchText', searchText, data.length);
      
      // If 'name' is present, perform a "starts with" search and include categories.slug
      if (hasName) {
        const nameRegex = new RegExp(`^${nameValue}`, 'i'); // Case-insensitive starts with
        data = data.filter((product) => {
          const matchesName = nameRegex.test(product.name);
          const matchesCategory = slugValue
            ? product.categories.some((category) => category.slug === slugValue)
            : true; // If no category filter, match all
          return matchesName && matchesCategory;
        });
      } else {
        // Perform a general search using other fields (excluding name)
        data = fuse
          .search({
            $and: searchText,
          })
          ?.map(({ item }) => item);
      }
    }
  
    console.log('before data', data.length);
  
    // Apply slug filtering if 'name' is not found
    if (!hasName && slugValue) {
      data = data.filter((product) =>
        product.categories.some((category) => category.slug === slugValue),
      );
    }
  
    console.log('after data', data.length);
  
    if (slugValue || hasName) {
      // Sort data by name if applicable
      data.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          numeric: true,
          sensitivity: 'base',
        }),
      );
    }
  
    // Paginate the results
    const results = data.slice(startIndex, endIndex);
    const url = `/products?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }
  
  getProductBySlug(slug: string): Product {
    const product = this.products.find((p) => p.slug === slug);
    const related_products = this.products
      .filter((p) => p.type.slug === product.type.slug)
      .slice(0, 20);
    return {
      ...product,
      related_products,
    };
  }

  getPopularProducts({ limit, type_slug }: GetPopularProductsDto): Product[] {
    let data: any = this.popularProducts;
    if (type_slug) {
      data = fuse.search(type_slug)?.map(({ item }) => item);
    }
    return data?.slice(0, limit);
  }
  getBestSellingProducts({
    limit,
    type_slug,
  }: GetBestSellingProductsDto): Product[] {
    let data: any = this.bestSellingProducts;
    if (type_slug) {
      data = fuse.search(type_slug)?.map(({ item }) => item);
    }
    return data?.slice(0, limit);
  }

  getProductsStock({ limit, page, search }: GetProductsDto): ProductPaginator {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let data: Product[] = this.products.filter((item) => item.quantity <= 9);

    if (search) {
      const parseSearchParams = search.split(';');
      const searchText: any = [];
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');
        // TODO: Temp Solution
        if (key !== 'slug') {
          searchText.push({
            [key]: value,
          });
        }
      }

      data = fuse
        .search({
          $and: searchText,
        })
        ?.map(({ item }) => item);
    }

    const results = data.slice(startIndex, endIndex);
    const url = `/products-stock?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }

  getDraftProducts({ limit, page, search }: GetProductsDto): ProductPaginator {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let data: Product[] = this.products.filter(
      (item) => item.status === 'draft',
    );

    if (search) {
      const parseSearchParams = search.split(';');
      const searchText: any = [];
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');
        // TODO: Temp Solution
        if (key !== 'slug') {
          searchText.push({
            [key]: value,
          });
        }
      }

      data = fuse
        .search({
          $and: searchText,
        })
        ?.map(({ item }) => item);
    }

    const results = data.slice(startIndex, endIndex);
    const url = `/draft-products?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.products[0];
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
