import api from './index';
import { ICardOrderData, IBankSlipOrderData } from './api.interfaces';

export async function payWithCard(data: ICardOrderData): Promise<any> {
  try {
    const order = await api.post('/orders', { ...data, option: 'card' });
    return order;
  } catch (err) {
    throw new Error(err);
  }
}

export async function payWithBankSlip(data: IBankSlipOrderData): Promise<any> {
  try {
    const order = await api.post('/orders', { ...data, option: 'bank slip' });
    return order;
  } catch (err) {
    throw new Error(err);
  }
}
