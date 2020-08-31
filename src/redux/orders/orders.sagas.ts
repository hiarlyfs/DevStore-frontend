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
import {
  getOrdersFailure,
  getOrdersSuccess,
  getOrderFailure,
  getOrderSuccess,
} from './order.actions';

import {
  getAllOrdersFromClient,
  getOrderById,
} from '../../services/api/apiOrders';
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

function* fetchSingleOrderById({
  payload,
}: IOrderAction): Generator<any, any, any> {
  try {
    const order = yield call(getOrderById, payload as string);
    console.log(order);
    yield put(getOrderSuccess(order));
  } catch (err) {
    yield put(getOrderFailure(err));
  }
}

function* getOrder(): Generator<ForkEffect<void>> {
  yield takeLatest(OrderTypes.FETCH_SINGLE_ORDER_START, fetchSingleOrderById);
}

export function* orderSagas(): Generator<AllEffect<CallEffect>> {
  yield all([call(getOrdersFromCLient), call(getOrder)]);
}
