import React from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { User } from 'firebase';

import { clearCart } from '../../redux/cart/cart.actions';
import WithCart from '../WithCart';
import WithUser from '../WithUser';
import { IProductCart } from '../../redux/cart/cart.interfaces';

interface IMapDispatchToProps {
  clearCart: () => void;
}

interface IProps extends IMapDispatchToProps {
  totalCart: number;
  currentUser: User;
  productsCart: IProductCart[];
  clearCart: () => void;
}

const WithPaymentForm = (
  WrapperComponent: React.ComponentType<any>,
): React.FC => {
  const Provider: React.FC<IProps> = ({
    productsCart,
    totalCart,
    currentUser,
    // eslint-disable-next-line no-shadow
    clearCart,
  }: IProps) => {
    const itemsCart = productsCart.map((product) => {
      return {
        id: String(product.id),
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
        clearCart={clearCart}
      />
    );
  };

  const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
    clearCart: () => dispatch(clearCart()),
  });

  return WithCart(WithUser(connect(null, mapDispatchToProps)(Provider)));
};

export default WithPaymentForm;
