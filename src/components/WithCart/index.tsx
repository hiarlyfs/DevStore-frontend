import React, { ComponentType } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectProductsCart,
  selectTotalCart,
} from '../../redux/cart/cart.selectors';
import { IProductCart } from '../../redux/cart/cart.interfaces';
import { IReducer } from '../../redux/root-reducer.interface';

interface IMapStateToProps {
  products: IProductCart[];
  total: number;
}

interface IProps {
  products: IProductCart[];
  total: number;
}

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  products: selectProductsCart,
  total: selectTotalCart,
});

const WithCart = (BaseComponent: ComponentType<any>): React.FC => {
  const Provider: React.FC<IProps> = ({
    products,
    total,
    ...props
  }: IProps) => {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <BaseComponent {...props} productsCart={products} totalCart={total} />
    );
  };

  return connect(mapStateToProps)(Provider);
};

export default WithCart;
