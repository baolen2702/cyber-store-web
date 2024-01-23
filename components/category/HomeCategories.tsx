"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import HomeCategoryItem from "./HomeCategoryItem";
import { observer } from "mobx-react-lite";
import { useStore } from "../provider/StoreProvider";
const HomeCategories = observer(() => {
  const store = useStore();
  const categories = store ? store.categories : [];

  return (
    <div className="container w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
      <div className="grid row-span-2 gap-5">
        {categories.slice(0, 2).map((category) => (
          <HomeCategoryItem key={category.id} category={category} />
        ))}
      </div>
      <div className="order-first sm:order-none min-h-96 cols-span-2 row-span-2 flex flex-col items-center py-6 bg-cover bg-no-repeat bg-center h-full w-full bg-[url('https://ik.imagekit.io/ngnp3wo0m/category.jpg?updatedAt=1705025433357')]">
        <h3 className="text-xl font-bold">Vegetables</h3>
        <p>Protect the health of every home</p>
        <Link href="/shop">
          <Button className="rounded-full" size="sm">
            Shop now
          </Button>
        </Link>
      </div>
      <div className="grid row-span-2 gap-5">
        {categories.slice(2, 4).map((category) => (
          <HomeCategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
});

export default HomeCategories;
