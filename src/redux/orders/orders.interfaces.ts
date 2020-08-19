import { Order, OrderDetails } from '../../types/Order';

export interface IOrdersReducerState {
  fetching: boolean;
  orders: Order[];
  selectedOrder: OrderDetails | null;
  error: Error | null;
}

export interface IOrderAction {
  type: string;
  payload?: Error | OrderDetails | Order[] | string;
}
