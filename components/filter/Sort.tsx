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
    <div className="flex gap-3 items-center">
      <Select
        onValueChange={(value) => {
          setQueryParams("sortBy", value);
        }}
      >
        <SelectTrigger className="w-[90px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={ProductSortField.CreatedAt}>Date</SelectItem>
            <SelectItem value={ProductSortField.Price}>Price</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => {
          setQueryParams("sortOrder", value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort direction" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={SortOrder.Asc}>Ascending</SelectItem>
            <SelectItem value={SortOrder.Desc}>Descending</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Sort;
