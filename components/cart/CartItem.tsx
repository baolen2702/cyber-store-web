import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ICartItem } from "@/store/domain/cart";
import { Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import CartSelectQuantity from "./CartSelectQuantity";
import slugify from "react-slugify";
const CartItem = ({
  item,
  onRemove,
  onUpdateQuantity,
}: {
  item: ICartItem;
  onRemove: () => void;
  onUpdateQuantity: (value: number) => void;
}) => {
  return (
    <TableRow className="w-full">
      <TableCell className="p-4">
        <Link
          href={`/product/${item.id}/${slugify(item.name)}`}
          className={cn("flex")}
        >
          <Avatar className="rounded-lg">
            <AvatarImage src={item.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </TableCell>
      <TableCell className="text-left">
        <p className="text-sm">{item.name}</p>
      </TableCell>
      <TableCell className="text-left text-xs flex items-center justify-center gap-2 whitespace-nowrap">
        <CartSelectQuantity
          quantity={item.quantity}
          onChange={(value) => onUpdateQuantity(value)}
        />
        <p> x ${item.price}</p>
      </TableCell>
      <TableCell>
        <div className="flex gap-2">
          <button
            className="flex items-center hover:text-rose-600"
            onClick={onRemove}
          >
            <Trash size={14} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
