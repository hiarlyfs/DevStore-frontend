import { Product } from '../../types/Products';

export interface IProductCart extends Product {
  quantity: number;
}

export interface ICartReducerState {
  products: IProductCart[];
  hidden: boolean;
}

export interface ICartAction {
  type: string;
  payload?: Product | number;
}
