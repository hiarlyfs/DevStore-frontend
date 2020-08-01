import { createSelector } from 'reselect';
import { IReducer } from '../root-reducer.interface';
import { ICartReducerState } from './cart.interfaces';

const selectCart = (state: IReducer): ICartReducerState => state.cart;

export const selectProductsCart = createSelector(
  [selectCart],
  (cart) => cart.products,
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);

export const selectQtdItemsCart = createSelector(
  [selectProductsCart],
  (products) => products.reduce((prev, cur) => prev + cur.quantity, 0),
);

export const selectTotalCart = createSelector(
  [selectProductsCart],
  (products) =>
    products.reduce((prev, cur) => prev + cur.price * cur.quantity, 0),
);
