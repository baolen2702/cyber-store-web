export interface IDeliveryMethod {
  id: string;
  name: string;
  fee: number;
}
export const deliveryMethods: IDeliveryMethod[] = [
  { id: "standard", name: "Standard", fee: 10 },
  { id: "express", name: "Express", fee: 15 },
  { id: "in2hours", name: "In 2 hours", fee: 30 },
];
