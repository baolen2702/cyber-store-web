import { Checkbox } from "@/components/ui/checkbox";

const AdditionalFilter = () => {
  return (
    <div className="w-full space-y-4">
      <div className="text-xl font-semibold">Additional</div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="Organic" />
          <label
            htmlFor="Organic"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Organic
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="Fresh" />
          <label
            htmlFor="Fresh"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Fresh
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="Sales" />
          <label
            htmlFor="Sales"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Sales
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="Discount" />
          <label
            htmlFor="Discount"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Discount
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFilter;
