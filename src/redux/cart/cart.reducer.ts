import CartTypes from './cart.types';
import { ICartAction, ICartReducerState } from './cart.interfaces';
import { addNewProduct, addUnitProduct, removeUnitProduct } from './cart.utils';
import { Product } from '../../types/Products';

const INITIAL_STATE: ICartReducerState = {
  products: [],
  hidden: true,
};

export const CartReducer = (
  state = INITIAL_STATE,
  action: ICartAction,
): ICartReducerState => {
  switch (action.type) {
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        products: addNewProduct(state.products, action.payload as Product),
      };
    case CartTypes.SHOW_CART:
      return {
        ...state,
        hidden: false,
      };
    case CartTypes.HIDE_CART:
      return {
        ...state,
        hidden: true,
      };
    case CartTypes.ADD_ITEM_UNIT: {
      return {
        ...state,
        products: addUnitProduct(state.products, action.payload as number),
      };
    }
    case CartTypes.DECREASE_ITEM_UNIT: {
      return {
        ...state,
        products: removeUnitProduct(state.products, action.payload as number),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
