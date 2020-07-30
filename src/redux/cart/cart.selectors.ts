import { createSelector } from 'reselect';
import { IReducer } from '../root-reducer.interface';
import { ICartReducerState } from './cart.interfaces';

const selectCart = (state: IReducer): ICartReducerState => state.cart;

export const selectProductsCart = createSelector(
  [selectCart],
  (cart) => cart.products,
);
