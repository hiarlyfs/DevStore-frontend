import { createSelector } from 'reselect';
import { IReducer } from '../root-reducer.interface';
import { IOrdersReducerState } from './orders.interfaces';

const selectOrdersReducer = (state: IReducer): IOrdersReducerState =>
  state.orders;

export const selectOrders = createSelector(
  [selectOrdersReducer],
  (orders) => orders.orders,
);

export const selectIsFetchingOrders = createSelector(
  [selectOrdersReducer],
  (orders) => orders.fetching,
);

export const selectErrorOrders = createSelector(
  [selectOrdersReducer],
  (orders) => orders.error,
);

export const selectSelectedOrder = createSelector(
  [selectOrdersReducer],
  (orders) => orders.selectedOrder,
);
