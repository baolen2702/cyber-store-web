"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/components/provider/StoreProvider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CheckoutSummary = observer(() => {
  const store = useStore();

  if (!store) {
    return <div>Empty Store</div>;
  }

  const taxFee = useMemo(
    () => store.uiSettingStore.tax * store.cartStore.totalPrice,
    [store.uiSettingStore.tax, store.cartStore.totalPrice]
  );
  const deliveryFee = useMemo(
    () =>
      store.orderStore.deliveryMethod ? store.orderStore.deliveryMethod.fee : 0,
    [store.orderStore.deliveryMethod]
  );
  const totalFee = useMemo(() => {
    return deliveryFee + store.cartStore.totalPrice + taxFee;
  }, [deliveryFee, store.cartStore.totalPrice, taxFee]);

  return (
    <div className="w-full h-fit space-y-4 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold">Summary</h2>

      {!store.orderStore.order && (
        <div className="flex flex-col gap-2">
          <div className="text-sm">Gift card or discount code?</div>
          <div className="w-full flex gap-5">
            <Input className="flex-grow" placeholder="Discount code" />
            <Button>Apply</Button>
          </div>
        </div>
      )}
      <div className="w-full space-y-4">
        {store.orderStore.order &&
          store.orderStore.order.items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <Avatar className="rounded-lg">
                <AvatarImage src={item.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-sm grow">{item.name}</div>
              <p className="text-sm">
                {item.quantity} x ${item.price}
              </p>
            </div>
          ))}
      </div>
      <div className="space-y-4 py-4 border-t">
        <div className="text-sm flex items-center justify-between">
          <span>Subtotal</span>
          <span>${store.cartStore.totalPrice}</span>
        </div>
        <div className="text-sm flex items-center justify-between">
          <span>Shipping</span>
          <span>${deliveryFee}</span>
        </div>
        <div className="text-sm flex items-center justify-between">
          <span>Taxes</span>
          <span>${taxFee}</span>
        </div>
        <div className="text-sm font-bold flex items-center justify-between border-t pt-4">
          <span>Total</span>
          <span>${totalFee}</span>
        </div>
      </div>
    </div>
  );
});

export default CheckoutSummary;
