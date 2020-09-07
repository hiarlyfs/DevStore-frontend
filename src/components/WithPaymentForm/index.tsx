/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { User } from 'firebase';
import {
  selectCheckoutFailure,
  selectIsOrdering,
} from '../../redux/checkout/checkout.selectors';

import WithCart from '../WithCart';
import WithUser from '../WithUser';
import { IProductCart } from '../../redux/cart/cart.interfaces';
import { IReducer } from '../../redux/root-reducer.interface';

interface IMapStateToProps {
  ordering: boolean;
  orderError: Error | null;
}

interface IProps extends IMapStateToProps {
  totalCart: number;
  currentUser: User;
  productsCart: IProductCart[];
}

const WithPaymentForm = (
  WrapperComponent: React.ComponentType<any>,
): React.FC => {
  const Provider: React.FC<IProps> = ({
    productsCart,
    totalCart,
    currentUser,
    ordering,
    orderError,
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
        ordering={ordering}
        orderError={orderError?.message}
      />
    );
  };

  const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
    orderError: selectCheckoutFailure,
    ordering: selectIsOrdering,
  });

  return WithCart(WithUser(connect(mapStateToProps)(Provider)));
};

export default WithPaymentForm;
