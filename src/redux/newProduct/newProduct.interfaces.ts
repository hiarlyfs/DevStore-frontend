import { Product } from '../../types/Products';

export interface INewProduct {
  productName: string;
  productPrice: string;
  productCategory: string;
  img: Blob;
}

export interface INewProductAction {
  type: string;
  payload?: INewProduct | Product | Error;
}

export interface INewProductReducerState {
  adding: boolean;
  error: Error | null;
  product: Product | null;
}
