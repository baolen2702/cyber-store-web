"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/components/provider/StoreProvider";
import CartItem from "@/components/cart/CartItem";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const CheckoutReviewCart = observer(() => {
  const store = useStore();

  if (!store) {
    return <div>Empty Store</div>;
  }

  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-semibold">Products</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-semibold text-black">
              Product
            </TableHead>
            <TableHead className="font-semibold text-black">Name</TableHead>
            <TableHead className="font-semibold text-black">Price</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        {store.cartStore.items.length > 0 ? (
          <TableBody>
            {store.cartStore.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={(quantity) =>
                  store.cartStore.updateQuantity(item.id, quantity)
                }
                onRemove={() => store.cartStore.removeFromCart(item)}
              />
            ))}
            <TableRow>
              <TableCell colSpan={3} className="text-sm font-semibold">
                Total
              </TableCell>
              <TableCell className="text-sm font-semibold">
                ${store.cartStore.totalPrice}
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-sm">
              Your cart is empty.
            </TableCell>
          </TableRow>
        )}
      </Table>
    </div>
  );
});

export default CheckoutReviewCart;
