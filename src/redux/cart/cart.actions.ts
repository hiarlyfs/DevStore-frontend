import CartTypes from './cart.types';
import { ICartAction } from './cart.interfaces';
import { Product } from '../../types/Products';

export const addToCard = (product: Product): ICartAction => ({
  type: CartTypes.ADD_ITEM,
  payload: product,
});
