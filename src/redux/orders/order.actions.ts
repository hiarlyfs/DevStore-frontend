import OrderTypes from './orders.types';
import { IOrderAction } from './orders.interfaces';
import { Order, OrderDetails } from '../../types/Order';

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

export const getOrderStart = (orderId: string): IOrderAction => ({
  type: OrderTypes.FETCH_SINGLE_ORDER_START,
  payload: orderId,
});

export const getOrderSuccess = (order: OrderDetails): IOrderAction => ({
  type: OrderTypes.FETCH_SINGLE_ORDER_SUCCESS,
  payload: order,
});

export const getOrderFailure = (error: Error): IOrderAction => ({
  type: OrderTypes.FETCH_SINGLE_ORDER_FAILURE,
  payload: error,
});
