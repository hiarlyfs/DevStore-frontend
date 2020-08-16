import { User } from 'firebase';
import { IProductCart } from '../../redux/cart/cart.interfaces';

export interface IWithPaymentFormProps {
  productsCart: IProductCart[];
  totalCart: number;
  currentUser: User;
}
