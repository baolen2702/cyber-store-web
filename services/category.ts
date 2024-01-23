import { IFetchCategoryQuery, IListCategoryResponse } from "@/data/category";
import { fetcher } from "@/lib/fetcher";

export const fetchCategories = async (query: IFetchCategoryQuery) => {
  const searchParams = new URLSearchParams();
  searchParams.set("page", query.page.toString());
  searchParams.set("take", query.take.toString());

  return fetcher<IListCategoryResponse>(
    `category?${searchParams.toString()}`
  );
};
