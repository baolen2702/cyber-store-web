import { IPageMetaResponse } from "./pageMeta";
export interface IFetchCategoryQuery {
  page: number;
  take: number;
}
export interface ICategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IListCategoryResponse extends IPageMetaResponse<ICategory> {}
export const categories = [];
