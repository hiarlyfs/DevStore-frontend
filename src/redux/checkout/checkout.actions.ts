import CheckoutTypes from './checkout.types';
import { ICheckoutAction } from './checkout.interfaces';
import {
  ICardOrderData,
  IBankSlipOrderData,
} from '../../services/api/api.interfaces';

export const startCheckoutWithCard = (
  checkoutData: ICardOrderData,
  successCb?: () => void,
): ICheckoutAction => ({
  type: CheckoutTypes.START_CARD_CHECKOUT,
  payload: checkoutData,
  successCb,
});

export const startCheckoutWithBankSlip = (
  checkoutData: IBankSlipOrderData,
  successCb?: () => void,
): ICheckoutAction => ({
  type: CheckoutTypes.START_BANK_SLIP_CHECKOUT,
  payload: checkoutData,
  successCb,
});

export const successCheckout = (): ICheckoutAction => ({
  type: CheckoutTypes.SUCCESS_CHECKOUT,
});

export const failureCheckout = (error: Error): ICheckoutAction => ({
  type: CheckoutTypes.FAILURE_CHECKOUT,
  payload: error,
});
