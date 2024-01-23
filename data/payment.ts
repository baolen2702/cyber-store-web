export interface IPaymentMethod {
  id: string;
  name: string;
}
export const paymentMethods: IPaymentMethod[] = [
  { id: "cod", name: "Cash on delivery" },
  { id: "visa", name: "Visa" },
];
