"use client";
import { useContext } from "react";
import { ArrowLeft, ShoppingBasket } from "lucide-react";
import CheckoutReviewCart from "@/components/checkout/CheckoutReviewCart";
import CheckoutAddress from "@/components/checkout/CheckoutAddress";
import CheckoutDelivery from "@/components/checkout/CheckoutDelivery";
import CheckoutPayment from "@/components/checkout/CheckoutPayment";
import { Button } from "@/components/ui/button";
import CheckoutProvider, {
  OrderContext,
  OrderStep,
} from "../provider/CheckoutProvider";
import CheckoutResult from "./CheckoutResult";
import Link from "next/link";
const CheckoutSection = () => {
  return (
    <CheckoutProvider>
      <CheckoutContainer />
    </CheckoutProvider>
  );
};
const CheckoutContainer = () => {
  const { step, setStep, onNextStep } = useContext(OrderContext);

  return (
    <div>
      <div className="space-y-5">
        {step !== OrderStep.Completed && (
          <Button
            variant="outline"
            className="text-sm flex gap-1"
            onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
          >
            <ArrowLeft size={14} />
            Back
          </Button>
        )}
        {step === OrderStep.ReviewProduct && <CheckoutReviewCart />}
        {step === OrderStep.AddAddress && <CheckoutAddress />}
        {step === OrderStep.AddDeliveryMethod && <CheckoutDelivery />}
        {step === OrderStep.AddPaymentMethod && <CheckoutPayment />}
        {step === OrderStep.Completed && <CheckoutResult />}

        <div>
          {step !== OrderStep.Completed ? (
            <Button
              type="button"
              className="w-full text-sm flex gap-1"
              onClick={() => {
                onNextStep();
              }}
            >
              Next
            </Button>
          ) : (
            <Link href="/">
              <Button type="button" className="w-full text-sm flex gap-1">
                <ShoppingBasket size={16} /> Continue shopping
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
