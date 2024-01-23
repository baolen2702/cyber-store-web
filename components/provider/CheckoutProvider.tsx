"use client";
import { z } from "zod";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { useStore } from "./StoreProvider";
export enum OrderStep {
  ReviewProduct = 1,
  AddAddress = 2,
  AddDeliveryMethod = 3,
  AddPaymentMethod = 4,
  Completed = 5,
}
export const OrderContext = createContext<{
  step: OrderStep;
  setStep: Dispatch<SetStateAction<OrderStep>>;
  onNextStep: () => void;
}>({
  step: OrderStep.ReviewProduct,
  setStep: () => {},
  onNextStep: () => {},
});

const orderSchema = z.object({
  customer: z.object({
    firstName: z.string({ required_error: "First name is required" }),
    lastName: z.string({ required_error: "Last name is required" }),
    email: z.string({ required_error: "Email is required" }),
    address: z.string({ required_error: "Address is required" }),
    phone: z.string({ required_error: "Phone is required" }),
    city: z.string({ required_error: "City is required" }),
    country: z.string({ required_error: "Country required" }),
    zip: z.string({ required_error: "ZIP is required" }),
  }),
});
const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(OrderStep.ReviewProduct);
  const store = useStore();
  const form = useForm<z.infer<typeof orderSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(orderSchema),
    defaultValues: {
      customer: {
        firstName: "Le",
        lastName: "Ngoc Bao",
        email: "baolen@gmail.com",
        address: "34830 Erdman Hollow",
        phone: "13-850175-9137",
        city: "New York",
        country: "UK",
        zip: "70000",
      },
    },
  });
  function onSubmit(formData: z.infer<typeof orderSchema>) {
    console.log(formData);
  }
  const onNextStep = () => {
    switch (step) {
      case OrderStep.ReviewProduct:
        setStep(OrderStep.AddAddress);
        break;
      case OrderStep.AddAddress:
        form.trigger().then((value) => {
          value && setStep(OrderStep.AddDeliveryMethod);
        });
        break;
      case OrderStep.AddDeliveryMethod:
        setStep(OrderStep.AddPaymentMethod);
        break;
      case OrderStep.AddPaymentMethod:
        placeOrder();
        setStep(OrderStep.Completed);
        break;
      default:
        break;
    }
  };
  const placeOrder = () => {
    const customer = form.getValues().customer;
    store?.orderStore.setOrder({
      id: "",
      orderCode: "ORDER#1001",
      items: store.cartStore.items,
      totalPrice: store.cartStore.totalPrice,
      discountCode: null,
      deliveryMethod: store.orderStore.deliveryMethod.id,
      paymentMethod: store.orderStore.paymentMethod.id,
      customerFirstName: customer.firstName,
      customerLastName: customer.lastName,
      customerEmail: customer.email,
      customerPhone: customer.address,
      customerAddress: customer.phone,
      customerCity: customer.city,
      customeCountry: customer.country,
      customerZip: customer.zip,
      createdAt: new Date(),
    });
  };
  const value = useMemo(
    () => ({
      step: step,
      setStep,
      onNextStep,
    }),
    [step, setStep, onNextStep]
  );

  return (
    <FormProvider {...form}>
      <OrderContext.Provider value={value}>
        <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
      </OrderContext.Provider>
    </FormProvider>
  );
};

export default CheckoutProvider;
