import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import CheckoutContainer from "@/components/checkout/CheckoutSection";

export default function CheckoutPage() {
  return (
    <div className="container py-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
      <CheckoutContainer />
      <CheckoutSummary />
    </div>
  );
}
