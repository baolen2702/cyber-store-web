import { IProductOptionValue } from "./productOptionValue";

export interface IProductOption {
  id: number;
  name: string;
  productId: number;
  createdAt: Date;
  values: IProductOptionValue[];
}
