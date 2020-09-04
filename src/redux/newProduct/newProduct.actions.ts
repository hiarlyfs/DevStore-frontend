import NewProductTypes from './newProduct.types';
import { INewProductAction, INewProduct } from './newProduct.interfaces';
import { Product } from '../../types/Products';

export const addProductStart = (
  newProduct: INewProduct,
): INewProductAction => ({
  type: NewProductTypes.ADD_NEW_PRODUCT_START,
  payload: newProduct,
});

export const addProductFailure = (error: Error): INewProductAction => ({
  type: NewProductTypes.ADD_NEW_PRODUCT_FAILURE,
  payload: error,
});

export const addProductSuccess = (product: Product): INewProductAction => ({
  type: NewProductTypes.ADD_NEW_PRODUCT_SUCCESS,
  payload: product,
});

export const clearReduxState = (): INewProductAction => ({
  type: NewProductTypes.CLEAR_REDUX_STATE,
});
