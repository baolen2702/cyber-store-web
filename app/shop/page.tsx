import AppPagination from "@/components/AppPagination";
import Filter from "@/components/filter";
import Sort from "@/components/filter/Sort";
import ProductList from "@/components/product/ProductList";
import { ProductSortField, SortOrder } from "@/data/products";
import { fetchProducts } from "@/services/products";
const LIMIT_PRODUCTS = 12;
export default async function ShopPage({
  searchParams,
}: {
  searchParams: {
    price?: string[];
    categoryId?: string[];
    page?: string;
    sortBy?: ProductSortField;
    sortOrder?: SortOrder;
  };
}) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const categoryId = searchParams.categoryId || [];

  const producResponse = await fetchProducts({
    page,
    take: LIMIT_PRODUCTS,
    categoryId: categoryId,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder,
  });

  return (
    <div className="container py-20 grid grid-cols-1 sm:grid-cols-4 gap-10">
      <Filter />
      <div className="col-span-3 space-y-4 flex flex-col items-center">
        <div className="w-full flex justify-end">
          <Sort />
        </div>
        <ProductList products={producResponse.data} />
        {producResponse.meta && (
          <AppPagination
            totalPages={Number(producResponse.meta.pageCount)}
            page={Number(producResponse.meta.page)}
          />
        )}
      </div>
    </div>
  );
}
