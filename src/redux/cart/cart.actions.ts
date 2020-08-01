import CartTypes from './cart.types';
import { ICartAction } from './cart.interfaces';
import { Product } from '../../types/Products';

export const addToCard = (product: Product): ICartAction => ({
  type: CartTypes.ADD_ITEM,
  payload: product,
});

export const hideCart = (): ICartAction => ({
  type: CartTypes.HIDE_CART,
});

export const showCart = (): ICartAction => ({
  type: CartTypes.SHOW_CART,
});

export const addUnitProduct = (idProduct: number): ICartAction => ({
  type: CartTypes.ADD_ITEM_UNIT,
  payload: idProduct,
});

export const decreaseUnitProduct = (idProduct: number): ICartAction => ({
  type: CartTypes.DECREASE_ITEM_UNIT,
  payload: idProduct,
});

export const deleteProduct = (idProduct: number): ICartAction => ({
  type: CartTypes.DELETE_ITEM,
  payload: idProduct,
});
