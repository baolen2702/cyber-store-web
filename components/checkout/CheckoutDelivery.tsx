"use client";
import { observer } from "mobx-react-lite";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { deliveryMethods } from "@/data/delivery";
import { useStore } from "@/components/provider/StoreProvider";

const CheckoutDelivery = observer(() => {
  const store = useStore();

  if (!store) {
    return <div>Empty Store</div>;
  }

  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-semibold">Delivery</h2>
      <RadioGroup
        defaultValue="comfortable"
        value={store.orderStore.deliveryMethod?.id}
        onValueChange={(value) => {
          const method = deliveryMethods.find((m) => m.id === value);
          method && store.orderStore.selectDeliveryMethod(method);
        }}
      >
        {deliveryMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center space-x-2 py-4 px-2 border rounded-lg"
          >
            <RadioGroupItem value={method.id} id={method.id} />
            <Label
              className="flex-grow flex items-center justify-between"
              htmlFor={method.id}
            >
              <span>{method.name}</span> <span>${method.fee}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
});

export default CheckoutDelivery;
