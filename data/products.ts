import { ICategory } from "./category";
import { IPageMetaResponse } from "./pageMeta";
import { IProductOption } from "./productOption";
export enum SortOrder {
  Asc = "ASC",
  Desc = "DESC",
}
export enum ProductSortField {
  CreatedAt = "createdAt",
  Price = "price",
}

export interface IFetchProductsQuery {
  page: number;
  take: number;
  name?: string;
  sortOrder?: SortOrder;
  sortBy?: ProductSortField;
  categoryId?: string;
}
export interface IProduct {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image: string;
  isActive: boolean;
  price: number;
  category: ICategory;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  options: IProductOption[];
}

export interface IProductVariant {
  name: string;
  value: string;
}
export interface IListProductResponse extends IPageMetaResponse<IProduct> {}
export interface IProductResponse extends IProduct {}
