"use client";
import { observer } from "mobx-react-lite";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { paymentMethods } from "@/data/payment";
import { useStore } from "@/components/provider/StoreProvider";

const CheckoutPayment = observer(() => {
  const store = useStore();

  if (!store) {
    return <div>Empty Store</div>;
  }

  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-semibold">Payment methods</h2>
      <RadioGroup
        defaultValue="comfortable"
        value={store.orderStore.paymentMethod?.id}
        onValueChange={(value) => {
          const method = paymentMethods.find((m) => m.id === value);
          method && store.orderStore.selectPaymentMethod(method);
        }}
      >
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center space-x-2 py-4 px-2 border rounded-lg"
          >
            <RadioGroupItem
              value={method.id}
              id={method.id}
              disabled={method.id === "visa"}
            />
            <Label
              className="flex-grow flex items-center justify-between"
              htmlFor={method.id}
            >
              {method.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
});

export default CheckoutPayment;
