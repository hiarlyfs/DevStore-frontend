import ProductTypes from './products.types';

import { IProductsAction, IProductsReducerState } from './products.interface';

const INITIAL_STATE: IProductsReducerState = {
  productsItems: [],
  isFetching: false,
  failure: null,
};

const productsReducer = (
  state = INITIAL_STATE,
  action: IProductsAction,
): IProductsReducerState => {
  switch (action.type) {
    case ProductTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        failure: null,
        isFetching: true,
      };
    case ProductTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        failure: null,
        isFetching: false,
        productsItems: action.payload || [],
      };
    case ProductTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        failure: new Error('An error ocurred'),
        isFetching: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
