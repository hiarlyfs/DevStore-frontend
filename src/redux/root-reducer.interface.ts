import { IProductsReducerState } from './products/products.interface';
import { ICartReducerState } from './cart/cart.interfaces';

export interface IReducer {
  products: IProductsReducerState;
  cart: ICartReducerState;
}
