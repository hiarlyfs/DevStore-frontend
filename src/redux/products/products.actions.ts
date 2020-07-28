import ProductsTypes from './products.types';

import { IACTION } from './products.interface';
import { Product } from '../../types/Products';

export const fetchProductsStart = (): IACTION => ({
  type: ProductsTypes.FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = (products: Product[]): IACTION => ({
  type: ProductsTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsError = (): IACTION => ({
  type: ProductsTypes.FETCH_PRODUCTS_FAILURE,
});
