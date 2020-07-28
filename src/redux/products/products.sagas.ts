import {
  takeLatest,
  put,
  call,
  all,
  AllEffect,
  CallEffect,
  ForkEffect,
  PutEffect,
} from 'redux-saga/effects';

import { getProducts } from '../../services/api/apiProducts';

import { fetchProductsError, fetchProductsSuccess } from './products.actions';

import ProductsTypes from './products.types';
import { IACTION } from './products.interface';
import { Product } from '../../types/Products';

function* putProducts(products: Product[]): Generator<PutEffect<IACTION>> {
  yield put(fetchProductsSuccess(products));
}

function* fetchProductsAsync(): Generator<any, any, any> {
  try {
    const data: Product[] = yield Promise.resolve(getProducts('local'));
    yield put(fetchProductsSuccess(data));
  } catch (error) {
    yield put(fetchProductsError());
  }
}

function* fetchProductsStart(): Generator<ForkEffect<void>> {
  yield takeLatest(ProductsTypes.FETCH_PRODUCTS_START, fetchProductsAsync);
}

export function* productsSagas(): Generator<AllEffect<CallEffect<void>>> {
  yield all([call(fetchProductsStart)]);
}
