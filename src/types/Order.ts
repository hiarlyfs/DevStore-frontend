/* eslint-disable camelcase */
export type Order = {
  orderData: string;
  amount: number;
  status: string;
  number: number;
};

export type ItemOrder = {
  id: string;
  title: string;
  unit_price: number;
  quantity: number;
};

export type OrderDetails = {
  status: string;
  id: number;
  payment_method: string;
  card_holder: string;
  card_brand: string;
  card_first_digits: number;
  installments: number;
  boleto_expiration_date: string;
  items: ItemOrder[];
};
