import { createSelector } from 'reselect';

import { IProductsReducerState } from './products.interface';
import { IReducer } from '../root-reducer.interface';

const selectProducts = (state: IReducer): IProductsReducerState =>
  state.products;

export const selectProductsItems = createSelector(
  [selectProducts],
  (products) => products.productsItems,
);

export const selectIsFetchingProducts = createSelector(
  [selectProducts],
  (products) => products.isFetching,
);

export const selectFailureProducts = createSelector(
  [selectProducts],
  (products) => products.failure,
);
