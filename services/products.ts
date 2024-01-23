import {
  IFetchProductsQuery,
  IListProductResponse,
  IProductResponse,
} from "@/data/products";
import { fetcher } from "@/lib/fetcher";

export const fetchProducts = async (query: IFetchProductsQuery) => {
  const searchParams = new URLSearchParams();
  searchParams.set("page", query.page.toString());
  searchParams.set("take", query.take.toString());
  if (query.name) {
    searchParams.set("name", query.name);
  }
  if (query.createdAt) {
    searchParams.set("createdAt", query.createdAt);
  }
  if (query.categoryIds && query.categoryIds.length > 0) {
    searchParams.set("categoryIds", query.categoryIds.join(","));
  }

  return fetcher<IListProductResponse>(
    `product?${searchParams.toString()}`
  );
};
export const getProductById = (id: number) => {
  return fetcher<IProductResponse>(`product/${id}`);
};
