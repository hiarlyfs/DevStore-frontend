import { User } from 'firebase';
import { IProductCart } from '../../redux/cart/cart.interfaces';
import { IItemsOrder } from '../../services/api/api.interfaces';

export interface IWithPaymentProvider {
  productsCart: IItemsOrder[];
  totalCart: number;
  currentUser: User;
  clearCart: () => void;
}
