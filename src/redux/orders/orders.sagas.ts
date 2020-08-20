import {
  takeLatest,
  all,
  call,
  put,
  AllEffect,
  CallEffect,
  ForkEffect,
} from 'redux-saga/effects';
import OrderTypes from './orders.types';
import { getOrdersFailure, getOrdersSuccess } from './order.actions';

import { getAllOrdersFromClient } from '../../services/api/apiOrders';
import { IOrderAction } from './orders.interfaces';

function* getOrders({ payload }: IOrderAction): Generator<any, any, any> {
  try {
    const orders = yield call(getAllOrdersFromClient, payload as string);
    yield put(getOrdersSuccess(orders));
  } catch (err) {
    yield put(getOrdersFailure(err));
  }
}

function* getOrdersFromCLient(): Generator<ForkEffect<void>> {
  yield takeLatest(OrderTypes.FETCH_ORDERS_START, getOrders);
}

export function* orderSagas(): Generator<AllEffect<CallEffect>> {
  yield all([call(getOrdersFromCLient)]);
}
