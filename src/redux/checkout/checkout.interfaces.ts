import {
  ICardOrderData,
  IBankSlipOrderData,
} from '../../services/api/api.interfaces';

export interface ICheckoutAction {
  type: string;
  payload?: Error | ICardOrderData | IBankSlipOrderData;
  successCb?: () => void;
}

export interface ICheckoutReducerState {
  ordering: boolean;
  failure: Error | null;
}
