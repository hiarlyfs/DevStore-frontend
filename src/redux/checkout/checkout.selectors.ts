import { createSelector } from 'reselect';
import { IReducer } from '../root-reducer.interface';
import { ICheckoutReducerState } from './checkout.interfaces';

const selectCheckout = (state: IReducer): ICheckoutReducerState =>
  state.checkout;

export const selectIsOrdering = createSelector(
  [selectCheckout],
  (checkout) => checkout.ordering,
);

export const selectCheckoutFailure = createSelector(
  [selectCheckout],
  (checkout) => checkout.failure,
);
