import AdditionalFilter from "./AdditionalFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SearchInput from "./SearchInput";

const Filter = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Fresh fruits shop</h1>
      <SearchInput />
      <CategoryFilter />
      <PriceFilter />
      <AdditionalFilter />
    </div>
  );
};

export default Filter;
