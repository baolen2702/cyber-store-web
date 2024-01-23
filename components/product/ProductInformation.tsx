import { IProduct } from "@/data/products";
import { faker } from "@faker-js/faker";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus } from "lucide-react";

const ProductInformation = ({ product }: { product: IProduct }) => (
  <Collapsible>
    <CollapsibleTrigger className="flex w-full justify-between items-center pt-3 mb-2">
      <span>Product Information</span>
      <Plus size={14} />
    </CollapsibleTrigger>
    <CollapsibleContent className="grid grid-cols-2 rounded-lg bg-gray-100">
      <div className="flex flex-col gap-1 text-sm px-4 py-3">
        <span className="font-semibold">Material</span>
        <span className="text-xs">{faker.commerce.productMaterial()}</span>
      </div>
      <div className="flex flex-col gap-1 text-sm  px-4 py-3">
        <span className="font-semibold">Country of origin</span>
        <span className="text-xs">{faker.location.country()}</span>
      </div>
      <div className="flex flex-col gap-1 text-sm  px-4 py-3">
        <span className="font-semibold">Weight</span>
        <span className="text-xs">{faker.number.int({ min: 0, max: 5 })}</span>
      </div>
      <div className="flex flex-col gap-1 text-sm  px-4 py-3">
        <span className="font-semibold">Type</span>
        <span className="text-xs">{faker.commerce.productAdjective()}</span>
      </div>
    </CollapsibleContent>
  </Collapsible>
);

export default ProductInformation;
