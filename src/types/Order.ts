/* eslint-disable camelcase */
export type Order = {
  data: string;
  amount: number;
  status: string;
  orderId: number;
};

export type ItemOrder = {
  id: string;
  title: string;
  unit_price: number;
  quantity: number;
  image: string;
  category: string;
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
