"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductSortField, SortOrder } from "@/data/products";
import { useQueryParams } from "@/hooks/queryParams";

const Sort = () => {
  const { setQueryParams } = useQueryParams();
  return (
    <Select
      onValueChange={(value) => {
        const [sortBy, sortOrder] = value.split(":");
        setQueryParams("sortBy", sortBy);
        setQueryParams("sortOrder", sortOrder);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={`${ProductSortField.CreatedAt}:${SortOrder.Asc}`}>
            Price: high to low
          </SelectItem>
          <SelectItem value={`${ProductSortField.CreatedAt}:${SortOrder.Desc}`}>
            Price: low to high
          </SelectItem>
          <SelectItem value={`${ProductSortField.Price}:${SortOrder.Asc}`}>
            Date: new to old
          </SelectItem>
          <SelectItem value={`${ProductSortField.Price}:${SortOrder.Desc}`}>
            Date: old to new
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sort;
