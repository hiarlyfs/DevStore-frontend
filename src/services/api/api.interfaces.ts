export interface IItemsOrder {
  id: string;
  product: string;
  unitPrice: number;
  quantity: number;
  tangible: boolean;
}

export interface ICardOrderData {
  clientId: string;
  amount: number;
  cardNumber: string;
  cardHolderName: string;
  cardExpirationDate: string;
  cardCvv: string;
  installments: number;
  items: IItemsOrder[];
}

export interface IBankSlipOrderData {
  clientId: string;
  amount: number;
  customer: {
    name: string;
    country: string;
    cpf: string;
    email: string;
  };
  items: IItemsOrder[];
}
