import AppPagination from "@/components/AppPagination";
import Filter from "@/components/filter";
import Sort from "@/components/filter/Sort";
import ProductList from "@/components/product/ProductList";
import { fetchProducts } from "@/services/products";
const LIMIT_PRODUCTS = 12;
export default async function ShopPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const page = urlSearchParams.get("page") || "1";
  const producResponse = await fetchProducts({
    page: Number(page),
    take: LIMIT_PRODUCTS,
  });

  return (
    <div className="container py-20 grid grid-cols-1 sm:grid-cols-4 gap-10">
      <Filter />
      <div className="col-span-3 space-y-4 flex flex-col items-center">
        <div className="w-full flex justify-end">
          <Sort />
        </div>
        <ProductList products={producResponse.data} />
        <AppPagination
          totalPages={Number(producResponse.meta.pageCount)}
          page={Number(producResponse.meta.page)}
        />
      </div>
    </div>
  );
}
