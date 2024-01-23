"use client"
import { Toggle } from "@/components/ui/toggle";
import { IProductOption } from "@/data/productOption";

const ProductOption = ({ option }: { option: IProductOption }) => (
  
  <div className="w-full space-y-3">
    <h2 className="text-sm font-semibold capitalize">{option.name}</h2>
    <div className="flex gap-5">
      {option.values.map((value) => (
        <Toggle key={value.id} className="border">
          <span className="capitalize text-xs">{value.name}</span>
        </Toggle>
      ))}
    </div>
  </div>
);

export default ProductOption;
