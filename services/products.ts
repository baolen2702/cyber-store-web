import {
  IFetchProductsQuery,
  IListProductResponse,
  IProductResponse,
} from "@/data/products";
import { fetcher } from "@/lib/fetcher";

export const fetchProducts = async (query: IFetchProductsQuery) => {
  const searchParams = new URLSearchParams();
  searchParams.append("page", query.page.toString());
  searchParams.append("take", query.take.toString());
  if (query.name) {
    searchParams.append("name", query.name);
  }

  if (query.sortBy) {
    searchParams.append("createdAt", query.sortBy);
  }

  if (query.categoryId && Array.isArray(query.categoryId)) {
    query.categoryId.forEach((id) => {
      searchParams.append("categoryId", id.toString());
    });
  }

  if (query.categoryId && !Array.isArray(query.categoryId)) {
    searchParams.append("categoryId", query.categoryId);
  }

  return fetcher<IListProductResponse>(`product?${searchParams.toString()}`, {
    next: { tags: [`product?${searchParams.toString()}`] },
  });
};
export const getProductById = (id: number) => {
  return fetcher<IProductResponse>(`product/${id}`);
};
