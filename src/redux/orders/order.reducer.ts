import { IOrdersReducerState, IOrderAction } from './orders.interfaces';
import OrderTypes from './orders.types';
import { Order, OrderDetails } from '../../types/Order';

const INITITAL_STATE: IOrdersReducerState = {
  fetching: false,
  error: null,
  orders: [],
  selectedOrder: null,
};

const OrderReducerState = (
  state = INITITAL_STATE,
  action: IOrderAction,
): IOrdersReducerState => {
  switch (action.type) {
    case OrderTypes.FETCH_ORDERS_START:
    case OrderTypes.FETCH_SINGLE_ORDER_START:
      return { ...state, fetching: true };
    case OrderTypes.FETCH_ORDERS_FAILURE:
    case OrderTypes.FETCH_SINGLE_ORDER_FAILURE:
      return { ...state, error: action.payload as Error };
    case OrderTypes.FETCH_ORDERS_SUCCESS:
      return { ...state, orders: action.payload as Order[], fetching: false };
    case OrderTypes.FETCH_SINGLE_ORDER_SUCCESS:
      return {
        ...state,
        selectedOrder: action.payload as OrderDetails,
        fetching: false,
      };
    default:
      return state;
  }
};

export default OrderReducerState;
