import ProductCard from "./ProductCard";
import { fetchProducts } from "@/services/products";

const RelatedProductList = async () => {
  const relativeProducts = await fetchProducts({ page: 1, take: 4 });

  return (
    <div className="flex flex-col items-center space-y-5">
      <h3 className="text-md">Related products</h3>
      <p className="text-2xl font-semibold">
        You might also want to check out these products.
      </p>
      <div className="grid grid-cols-4 gap-5">
        {relativeProducts.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProductList;
