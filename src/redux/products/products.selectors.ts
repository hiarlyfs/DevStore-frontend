import { createSelector } from 'reselect';

import { IREDUCER_STATE } from './products.interface';

const selectProducts = (state: { products: IREDUCER_STATE }): IREDUCER_STATE =>
  state.products;

export const selectProductsItem = createSelector(
  [selectProducts],
  (products) => products.productsItems,
);
