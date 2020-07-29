import { Action } from 'redux';
import { Product } from '../../types/Products';

export interface IProductsAction extends Action {
  type: string;
  payload?: Product[];
  category?: string | undefined;
}

export interface IProductsReducerState {
  productsItems: Product[];
  isFetching: boolean;
  failure: Error | null;
}
