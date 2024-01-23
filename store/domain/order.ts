import { IOrder } from "@/data/order";
import { RootStore } from "..";
import { makeAutoObservable } from "mobx";
import { IPaymentMethod, paymentMethods } from "@/data/payment";
import { IDeliveryMethod, deliveryMethods } from "@/data/delivery";

export class OrderStore {
  order: IOrder | null = null;
  rootStore;
  paymentMethod: IPaymentMethod = paymentMethods[0];
  deliveryMethod: IDeliveryMethod = deliveryMethods[0];
  productVariant=null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;
  }
  
  setOrder(value: IOrder) {
    this.order = value;
  }

  selectPaymentMethod(method: IPaymentMethod) {
    this.paymentMethod = method;
  }

  selectDeliveryMethod(method: IDeliveryMethod) {
    this.deliveryMethod = method;
  }
}
