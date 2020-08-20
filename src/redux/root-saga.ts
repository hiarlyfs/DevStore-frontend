import { all, call, AllEffect, CallEffect } from 'redux-saga/effects';

import { productsSagas } from './products/products.sagas';
import { userSagas } from './user/user.sagas';
import { checkoutSagas } from './checkout/checkout.sagas';
import { orderSagas } from './orders/orders.sagas';

export default function* rootSaga(): Generator<AllEffect<CallEffect<void>>> {
  yield all([
    call(productsSagas),
    call(userSagas),
    call(checkoutSagas),
    call(orderSagas),
  ]);
}
