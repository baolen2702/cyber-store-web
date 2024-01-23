import { ICategory } from "@/data/category";
import Image from "next/image";

const HomeCategoryItem = ({ category }: { category: ICategory }) => {
  return (
    <div className={"h-64 w-full relative flex items-end"}>
      <Image alt={category.name} src={category.image} fill />
      <div className="absolute px-4 py-2 bg-primary text-white text-sm">
        {category.name}
      </div>
    </div>
  );
};

export default HomeCategoryItem;
