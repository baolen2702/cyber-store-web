import ProductInformation from "@/components/product/ProductInformation";
import ProductMeta from "@/components/product/ProductMeta";
import ProductOption from "@/components/product/ProductOption";
import ProductPolicy from "@/components/product/ProductPolicy";
import ProductPrice from "@/components/product/ProductPrice";
import RelatedProductList from "@/components/product/RelatedProductList";
import { cn } from "@/lib/utils";
import { getProductById } from "@/services/products";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: { slug: string; productId: string };
}) {
  const product = await getProductById(Number(params.productId));
  if (!product) {
    return <div>Product no found.</div>;
  }


  return (
    <div className="container grid grid-cols-1 sm:grid-cols-3 gap-10 py-20">
      <div className="w-full flex flex-col gap-3 divide-y">
        <ProductMeta product={product} />
        <ProductInformation product={product} />
        <ProductPolicy product={product} />
      </div>

      <div className="p-1 h-fit bg-gray-100 border rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={460}
          height={427}
          className={cn(
            "h-auto w-auto object-cover transition-all aspect-square rounded-lg"
          )}
        />
      </div>
      <div className="space-y-5">
        {product.options.map((option) => (
          <ProductOption key={option.id} option={option} />
        ))}

        <ProductPrice product={product} />
      </div>
      <div className="col-span-3">
        <RelatedProductList />
      </div>
    </div>
  );
}
