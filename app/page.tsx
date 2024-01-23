import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Promotion from "@/components/Promotion";
import HomeCategories from "@/components/category/HomeCategories";
import HomeProductList from "@/components/home/HomeProductList";
import { fetchProducts } from "@/services/products";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["home-products"],
    queryFn: () => fetchProducts({ page: 1, take: 8 }),
  });

  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-between space-y-10 pb-24">
      <Banner />
      <HomeCategories />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeProductList />
      </HydrationBoundary>
      <Promotion />
      <Contact />
    </div>
  );
}
