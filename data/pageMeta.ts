export interface IPageMeta {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
export interface IPageMetaResponse<T> {
  data: T[];
  meta: IPageMeta;
}
