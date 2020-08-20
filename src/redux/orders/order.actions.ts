import OrderTypes from './orders.types';
import { IOrderAction } from './orders.interfaces';
import { Order } from '../../types/Order';

export const getOrdersStart = (clientId: string): IOrderAction => ({
  type: OrderTypes.FETCH_ORDERS_START,
  payload: clientId,
});

export const getOrdersFailure = (error: Error): IOrderAction => ({
  type: OrderTypes.FETCH_ORDERS_FAILURE,
  payload: error,
});

export const getOrdersSuccess = (orders: Order[]): IOrderAction => ({
  type: OrderTypes.FETCH_ORDERS_SUCCESS,
  payload: orders,
});
