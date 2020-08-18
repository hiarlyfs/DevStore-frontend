import {
  all,
  call,
  takeLatest,
  put,
  AllEffect,
  CallEffect,
  ForkEffect,
} from 'redux-saga/effects';
import CheckoutTypes from './checkout.types';
import { successCheckout, failureCheckout } from './checkout.actions';
import { clearCart } from '../cart/cart.actions';
import { payWithBankSlip, payWithCard } from '../../services/api/apiCheckout';
import { ICheckoutAction } from './checkout.interfaces';
import {
  ICardOrderData,
  IBankSlipOrderData,
} from '../../services/api/api.interfaces';

function* bankSlipCheckout({
  payload,
  successCb,
}: ICheckoutAction): Generator<any, any, any> {
  try {
    yield call(payWithBankSlip, payload as IBankSlipOrderData);
    yield put(successCheckout());
    yield put(clearCart());
    if (successCb) successCb();
  } catch (err) {
    yield put(failureCheckout(err));
  }
}

function* checkoutWithBankSlipt(): Generator<ForkEffect<any>> {
  yield takeLatest(CheckoutTypes.START_BANK_SLIP_CHECKOUT, bankSlipCheckout);
}

function* cardCheckout({
  payload,
  successCb,
}: ICheckoutAction): Generator<any, any, any> {
  try {
    yield call(payWithCard, payload as ICardOrderData);
    yield put(successCheckout());
    yield put(clearCart());
    if (successCb) successCb();
  } catch (err) {
    yield put(failureCheckout(err));
  }
}

function* checkoutWithCard(): Generator<ForkEffect<any>> {
  yield takeLatest(CheckoutTypes.START_CARD_CHECKOUT, cardCheckout);
}

export function* checkoutSagas(): Generator<AllEffect<CallEffect>> {
  yield all([call(checkoutWithCard), call(checkoutWithBankSlipt)]);
}
