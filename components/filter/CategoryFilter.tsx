"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useQueryParams } from "@/hooks/queryParams";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useStore } from "../provider/StoreProvider";
import { CheckedState } from "@radix-ui/react-checkbox";
import { ICategory } from "@/data/category";
const CategoryFilter = observer(() => {
  const store = useStore();
  const categories = store ? store.categories : [];

  const { searchParams, setQueryParams } = useQueryParams();
  const [values, setValues] = useState<string[]>(
    searchParams.getAll("categoryId")
  );

  useEffect(() => {
    setQueryParams("categoryId", values);
  }, [setQueryParams, values]);

  const handleCheckChange = (value: CheckedState, category: ICategory) => {
    if (value) {
      setValues((prev) => [...prev, category.id.toString()]);
    } else {
      setValues((prev) => prev.filter((e) => e !== category.id.toString()));
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="text-xl font-semibold">Categories</div>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2">
            <Checkbox
              id={category.id.toString()}
              checked={values.includes(category.id.toString())}
              onCheckedChange={(value) => handleCheckChange(value, category)}
            />
            <label
              htmlFor={category.id.toString()}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CategoryFilter;
