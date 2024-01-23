"use client";
import { IProduct } from "@/data/products";
import { makeAutoObservable } from "mobx";
import { RootStore } from "@/store";
export interface ICartItem extends IProduct {
  quantity: number;
}
export class CartStore {
  rootStore;
  items: ICartItem[] = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;
  }

  get totalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }

  get totalQuantity() {
    let quantity = 0;
    this.items.forEach((item) => {
      quantity += item.quantity;
    });
    return quantity;
  }
  updateQuantity(itemId: string, value: number) {
    const index = this.items.findIndex((item) => item.id === itemId);
    this.items[index] = { ...this.items[index], quantity: value };
  }

  addToCart(newItem: ICartItem) {
    const index = this.items.findIndex((item) => item.id === newItem.id);
    if (index === -1) {
      this.items.push({ ...newItem, quantity: 1 });
    } else {
      const updateItem = this.items[index];
      this.items[index] = { ...updateItem, quantity: updateItem.quantity + 1 };
    }
  }

  removeFromCart(newItem: ICartItem) {
    this.items = this.items.filter((item) => item.id !== newItem.id);
  }

  *fetch() {
    // const response = yield fetch("/api/value")
    // this.value = response.json()
  }
}
