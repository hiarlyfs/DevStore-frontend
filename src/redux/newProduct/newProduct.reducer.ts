import NewProductTypes from './newProduct.types';
import {
  INewProductReducerState,
  INewProductAction,
} from './newProduct.interfaces';
import { Product } from '../../types/Products';

const INITIAL_STATE: INewProductReducerState = {
  adding: false,
  error: null,
  product: null,
};

const newProductReducer = (
  state = INITIAL_STATE,
  action: INewProductAction,
): INewProductReducerState => {
  switch (action.type) {
    case NewProductTypes.ADD_NEW_PRODUCT_START:
      return {
        adding: true,
        error: null,
        product: null,
      };
    case NewProductTypes.ADD_NEW_PRODUCT_FAILURE:
      return {
        adding: false,
        error: action.payload as Error,
        product: null,
      };
    case NewProductTypes.ADD_NEW_PRODUCT_SUCCESS:
      return {
        adding: false,
        error: null,
        product: action.payload as Product,
      };
    case NewProductTypes.CLEAR_REDUX_STATE:
      return {
        adding: false,
        error: null,
        product: null,
      };
    default:
      return state;
  }
};

export default newProductReducer;
