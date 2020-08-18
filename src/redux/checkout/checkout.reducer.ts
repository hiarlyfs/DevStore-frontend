import { ICheckoutReducerState, ICheckoutAction } from './checkout.interfaces';
import CheckoutTypes from './checkout.types';

const INITITAL_STATE: ICheckoutReducerState = {
  ordering: false,
  failure: null,
};

const checkoutReducer = (
  state = INITITAL_STATE,
  action: ICheckoutAction,
): ICheckoutReducerState => {
  switch (action.type) {
    case CheckoutTypes.START_BANK_SLIP_CHECKOUT:
    case CheckoutTypes.START_CARD_CHECKOUT:
      return {
        ...state,
        ordering: true,
      };
    case CheckoutTypes.SUCCESS_CHECKOUT:
      return {
        ...state,
        ordering: false,
        failure: null,
      };
    case CheckoutTypes.FAILURE_CHECKOUT:
      return {
        ...state,
        ordering: false,
        failure: action.payload as Error,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
