import React from 'react';

import { IWithPaymentFormProps } from '../interfaces/WithPaymentForm.interfaces';
import WithCart from '../WithCart';
import WithUser from '../WithUser';

const WithPaymentForm = (
  WrapperComponent: React.ComponentType<any>,
): React.FC => {
  const Provider: React.FC<IWithPaymentFormProps> = ({
    productsCart,
    totalCart,
    currentUser,
  }: IWithPaymentFormProps) => {
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
        currentUser={currentUser}
        productsCart={itemsCart}
        totalCart={totalCart * 100}
      />
    );
  };

  return WithCart(WithUser(Provider));
};

export default WithPaymentForm;
