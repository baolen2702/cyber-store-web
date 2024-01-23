"use client";
import { useQuery } from "@tanstack/react-query";
import ProductList from "../product/ProductList";
import { fetchProducts } from "@/services/products";

const HomeProductList = () => {
  const {
    data: producResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["home-products"],
    queryFn: () => fetchProducts({ page: 1, take: 8 }),
  });
  if (isError) {
    return <div>Error</div>;
  }
  if (!producResponse) {
    return <div>Error</div>;
  }

  return (
    <>
      <ProductList
        isLoading={isLoading}
        products={producResponse.data}
        title="Popular product that we sold"
        subTitle="We provide best quality & fresh grocery items near your location"
      />
    </>
  );
};

export default HomeProductList;
