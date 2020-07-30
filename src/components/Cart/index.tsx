import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import ProductCart from '../ProductCart';

import { IReducer } from '../../redux/root-reducer.interface';

import { IProductCart } from '../../redux/cart/cart.interfaces';
import { selectProductsCart } from '../../redux/cart/cart.selectors';

import useStyles from './styles';

interface IMapStateToProps {
  productsCart: IProductCart[];
}

interface IProps extends IMapStateToProps {
  productsCart: IProductCart[];
}

const Card: React.FC<IProps> = ({ productsCart }: IProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <ArrowDropUpIcon className={styles.arrowUp} />
      {productsCart.map((product) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProductCart {...product} />
      ))}
    </Box>
  );
};

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  productsCart: selectProductsCart,
});

export default connect(mapStateToProps)(Card);
