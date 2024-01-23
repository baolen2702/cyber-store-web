import { IProduct } from "@/data/products";
import { faker } from "@faker-js/faker";

const ProductMeta = ({ product }: { product: IProduct }) => (
  <div className="w-full space-y-3">
    <h2 className="text-sm">{product.category.name}</h2>
    <h1 className="text-2xl font-semibold">{product.name}</h1>
    <p className="text-sm text-justify">
      {product.description}
    </p>
  </div>
);

export default ProductMeta;
