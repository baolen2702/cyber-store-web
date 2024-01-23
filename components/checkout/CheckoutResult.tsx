import { observer } from "mobx-react-lite";
import { useStore } from "@/components/provider/StoreProvider";
import { format } from "date-fns";

const CheckoutResult = observer(() => {
  const store = useStore();
  return (
    <div className="container p-4 rounded-lg bg-gray-100 space-y-3">
      <h1 className="text-2xl font-semibold">
        Thank you! Your order was placed successfully.
      </h1>
      <p className="text-sm">
        We have sent the order confirmation details to{" "}
        <strong>{store?.orderStore.order?.customerEmail}</strong>.
      </p>
      {store?.orderStore.order?.createdAt && (
        <p className="text-sm">
          <strong>Order date</strong> :{" "}
          {format(store?.orderStore.order?.createdAt, "hh:mm aa dd/MM/yyy")}
        </p>
      )}
      <p className="text-sm">
        <strong>Order code</strong> : {store?.orderStore.order?.orderCode}
      </p>
      <p className="text-sm">
        <strong>Phone</strong>: {store?.orderStore.order?.customerPhone}
      </p>
      <p className="text-sm">
        <strong>Address</strong> : {store?.orderStore.order?.customerAddress}
      </p>
      <p className="text-sm">
        <strong>City</strong>: {store?.orderStore.order?.customerCity}
      </p>
      <p className="text-sm">
        <strong>Country</strong> : {store?.orderStore.order?.customeCountry}
      </p>
      <p className="text-sm">
        <strong>ZIP Code</strong>: {store?.orderStore.order?.customerZip}
      </p>
    </div>
  );
});

export default CheckoutResult;
