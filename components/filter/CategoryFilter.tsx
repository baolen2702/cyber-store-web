"use client";
import { Checkbox } from "@/components/ui/checkbox";

import { useQueryParams } from "@/hooks/queryParams";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useStore } from "../provider/StoreProvider";
const CategoryFilter = observer(() => {
  const store = useStore();
  const categories = store ? store.categories : [];
  const [values, setValues] = useState<string[]>([]);
  const { setQueryParams } = useQueryParams();

  useEffect(() => {
    values.length > 0 && setQueryParams("categories", values.join(","));
  }, [values]);

  return (
    <div className="w-full space-y-4">
      <div className="text-xl font-semibold">Categories</div>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2">
            <Checkbox
              id={category.id.toString()}
              onCheckedChange={(value) => {
                if (value) {
                  setValues((prev) => [...prev, category.id.toString()]);
                } else {
                  setValues((prev) =>
                    prev.filter((e) => e !== category.id.toString())
                  );
                }
              }}
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
