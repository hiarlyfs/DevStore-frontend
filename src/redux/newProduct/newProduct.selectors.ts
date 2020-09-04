import { createSelector } from 'reselect';
import { IReducer } from '../root-reducer.interface';
import { INewProductReducerState } from './newProduct.interfaces';

const selectNewProduct = (state: IReducer): INewProductReducerState =>
  state.newProduct;

export const selectIsAddingNewProduct = createSelector(
  [selectNewProduct],
  (state) => state.adding,
);

export const selectErrorAddingProduct = createSelector(
  [selectNewProduct],
  (state) => state.error,
);

export const selectNewProductAdded = createSelector(
  [selectNewProduct],
  (state) => state.product,
);
