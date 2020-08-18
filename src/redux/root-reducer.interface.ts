import { IProductsReducerState } from './products/products.interface';
import { ICartReducerState } from './cart/cart.interfaces';
import { IUserState } from './user/user.interfaces';
import { ICheckoutReducerState } from './checkout/checkout.interfaces';

export interface IReducer {
  products: IProductsReducerState;
  cart: ICartReducerState;
  user: IUserState;
  checkout: ICheckoutReducerState;
}
