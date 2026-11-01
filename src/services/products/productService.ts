import type {
    ProductQueryParams,
    ProductQueryResult,
    ProductPriceRange,
} from "./types";

export interface ProductService {
    getProducts(
        params: ProductQueryParams
    ): Promise<ProductQueryResult>;

    getPriceRange(): Promise<ProductPriceRange>;
}
