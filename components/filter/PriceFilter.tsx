"use client";
import { useQueryParams } from "@/hooks/queryParams";
import { useDebounce } from "@/hooks/useDebounce";
import * as Slider from "@radix-ui/react-slider";
import { useEffect, useState } from "react";

const PriceFilter = () => {
  const [value, setValue] = useState([0, 1000]);
  const { setQueryParams } = useQueryParams();
  const debouncedValue = useDebounce<number[]>(value, 800);

  useEffect(() => {
    setQueryParams(
      "price",
      debouncedValue.map((v) => v.toString())
    );
  }, [debouncedValue]);

  return (
    <div className="w-full space-y-4">
      <div className="text-xl font-semibold">Price</div>
      <Slider.Root
        max={100}
        step={1}
        value={value}
        onValueChange={(values) => {
          setValue(values);
        }}
        className="relative flex w-full touch-none select-none items-center"
      >
        <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <Slider.Range className="absolute h-full bg-primary" />
        </Slider.Track>
        <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />{" "}
        <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      </Slider.Root>
    </div>
  );
};

export default PriceFilter;
