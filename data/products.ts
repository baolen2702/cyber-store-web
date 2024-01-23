import { ICategory } from "./category";
import { IPageMetaResponse } from "./pageMeta";
import { IProductOption } from "./productOption";
export interface IFetchProductsQuery {
  page: number;
  take: number;
  name?: string;
  createdAt?: "ASC" | "DESC";
  categoryIds?: number[];
}
export interface IProduct {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image: string;
  isActive: boolean;
  price?: number;
  category: ICategory;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  options: IProductOption[];
}

export interface IProductVariant{
  name:string
  value:string
}
export interface IListProductResponse extends IPageMetaResponse<IProduct> {}
export interface IProductResponse extends IProduct {}
