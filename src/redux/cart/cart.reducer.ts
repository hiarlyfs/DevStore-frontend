import CartTypes from './cart.types';
import { ICartAction, ICartReducerState } from './cart.interfaces';
import { addNewProduct } from './cart.utils';

const INITIAL_STATE: ICartReducerState = {
  products: [],
};

export const CartReducer = (
  state = INITIAL_STATE,
  action: ICartAction,
): ICartReducerState => {
  switch (action.type) {
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        products: addNewProduct(state.products, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
