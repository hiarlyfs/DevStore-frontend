import { all, call, AllEffect, CallEffect } from 'redux-saga/effects';

import { productsSagas } from './products/products.sagas';

export default function* rootSaga(): Generator<AllEffect<CallEffect<void>>> {
  yield all([call(productsSagas)]);
}
