"use client";
import { makeAutoObservable } from "mobx";
import { RootStore } from "..";

export class UiSettingStore {
  language = "en";
  shippingFee = 10;
  tax = 0.1;
  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  handleSelectLanguage(value: string) {
    this.language = value;
  }
}
