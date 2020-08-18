import { User } from 'firebase';
import { IItemsOrder } from '../../services/api/api.interfaces';

export interface IWithPaymentProvider {
  productsCart: IItemsOrder[];
  totalCart: number;
  currentUser: User;
  ordering: boolean;
  orderError: Error | null;
}
