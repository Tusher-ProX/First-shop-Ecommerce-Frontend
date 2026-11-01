import { mockProductService } from "./mockProductService";

export const productService = mockProductService;

export type {
    ProductService,
} from "./productService";

export type {
    ProductQueryParams,
    ProductQueryResult,
    ProductSortOrder,
} from "./types";
