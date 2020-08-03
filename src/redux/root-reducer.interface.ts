import { IProductsReducerState } from './products/products.interface';
import { ICartReducerState } from './cart/cart.interfaces';
import { IUserState } from './user/user.interfaces';

export interface IReducer {
  products: IProductsReducerState;
  cart: ICartReducerState;
  user: IUserState;
}
