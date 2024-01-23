import { ICartItem } from "@/store/domain/cart";

export interface IOrder {
  id: string;
  orderCode:string;
  items: ICartItem[];
  totalPrice: number;
  discountCode: string | null;
  deliveryMethod: string;
  paymentMethod: string;
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  customerCity: string;
  customeCountry: string;
  customerZip: string;
  createdAt: Date;
}
