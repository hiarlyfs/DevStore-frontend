import api from './index';
import { Order } from '../../types/Order';

interface IGetOrdersReponse {
  clientId: string;
  transactions: {
    [id: number]: {
      amount: number;
      data: string;
      status: string;
    };
  };
}

export async function getAllOrdersFromClient(
  clinetId: string,
): Promise<Order[]> {
  try {
    const response = await api.get<IGetOrdersReponse>(
      `/allOrders?clientId=${clinetId}`,
    );

    const orders: Order[] = Object.keys(response.data.transactions).map(
      (key) => {
        return {
          orderId: parseInt(key, 10),
          ...response.data.transactions[parseInt(key, 10)],
          data: response.data.transactions[parseInt(key, 10)].data.split(
            'T',
          )[0],
        };
      },
    );

    return orders;
  } catch (err) {
    throw new Error(err);
  }
}
