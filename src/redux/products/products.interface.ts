import { Product } from '../../types/Products';

export interface IACTION {
  type: string;
  payload?: Product[];
}

export interface IREDUCER_STATE {
  productsItems: Product[];
  isFetching: boolean;
  failure: Error | null;
}
