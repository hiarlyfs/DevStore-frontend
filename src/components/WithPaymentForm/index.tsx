import React from 'react';

import { User } from 'firebase';
import WithCart from '../WithCart';
import WithUser from '../WithUser';
import { IProductCart } from '../../redux/cart/cart.interfaces';

interface IProps {
  productsCart: IProductCart[];
  totalCart: number;
  user: User;
}

const WithPaymentForm = (
  WrapperComponent: React.ComponentType<any>,
): React.FC => {
  const Provider: React.FC<IProps> = ({
    productsCart,
    totalCart,
    user,
  }: IProps) => {
    const itemsCart = productsCart.map((product) => {
      return {
        id: product.id,
        product: product.name,
        unitPrice: product.price * 100,
        quantity: product.quantity,
        tangible: false,
      };
    });

    return (
      <WrapperComponent
        user={user}
        productsCart={itemsCart}
        totalCart={totalCart * 100}
      />
    );
  };

  return WithCart(WithUser(Provider));
};

export default WithPaymentForm;
