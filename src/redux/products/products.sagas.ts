import {
  takeLatest,
  put,
  call,
  all,
  AllEffect,
  CallEffect,
  ForkEffect,
} from 'redux-saga/effects';

import { getProducts } from '../../services/api/apiProducts';

import { fetchProductsError, fetchProductsSuccess } from './products.actions';

import ProductsTypes from './products.types';
import { Product } from '../../types/Products';

function* fetchProductsAsync({
  category,
}: {
  type: typeof ProductsTypes.FETCH_PRODUCTS_START;
  category: string;
}): Generator<any, any, any> {
  try {
    const data: Product[] = yield Promise.resolve(
      getProducts('default', category),
    );
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
