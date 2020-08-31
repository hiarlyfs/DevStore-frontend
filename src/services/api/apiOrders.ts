import api from './index';
import { Order, OrderDetails } from '../../types/Order';

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

interface IGetOrderDetailsReponse {
  transaction: OrderDetails;
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

export async function getOrderById(orderId: string): Promise<OrderDetails> {
  try {
    const { data } = await api.get<IGetOrderDetailsReponse>(
      `/orders?orderId=${orderId}`,
    );

    return data.transaction;
  } catch (err) {
    throw new Error(err);
  }
}
