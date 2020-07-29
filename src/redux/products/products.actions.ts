import ProductsTypes from './products.types';

import { IProductsAction } from './products.interface';
import { Product } from '../../types/Products';

export const fetchProductsStart = (category?: string): IProductsAction => ({
  type: ProductsTypes.FETCH_PRODUCTS_START,
  category,
});

export const fetchProductsSuccess = (products: Product[]): IProductsAction => ({
  type: ProductsTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsError = (): IProductsAction => ({
  type: ProductsTypes.FETCH_PRODUCTS_FAILURE,
});
