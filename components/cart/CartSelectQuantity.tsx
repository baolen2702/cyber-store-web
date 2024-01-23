import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CartSelectQuantity = ({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (value: number) => void;
}) => {
  return (
    <Select
      value={quantity.toString()}
      onValueChange={(value) => onChange(Number(value))}
    >
      <SelectTrigger className="text-center px-1 py-0 text-xs">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <SelectItem key={index} value={(index + 1).toString()}>
              {index + 1}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default CartSelectQuantity;
