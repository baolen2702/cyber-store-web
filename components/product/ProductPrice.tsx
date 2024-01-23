import { IProduct } from "@/data/products";
import { Button } from "../ui/button";

const ProductPrice = ({ product }: { product: IProduct }) => (
  <div className="w-full space-y-3 border-t py-5">
    <h2 className="text-2xl font-semibold capitalize">
      Price ${product.price}
    </h2>
    <Button className="w-full">Add to cart</Button>
  </div>
);

export default ProductPrice;
