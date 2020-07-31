import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Box from '@material-ui/core/Box';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Fade from '@material-ui/core/Fade';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';

import ProductCart from '../ProductCart';

import { IReducer } from '../../redux/root-reducer.interface';

import { IProductCart } from '../../redux/cart/cart.interfaces';
import {
  selectProductsCart,
  selectCartHidden,
  selectQtdItemsCart,
} from '../../redux/cart/cart.selectors';
import { hideCart, showCart } from '../../redux/cart/cart.actions';

import useStyles from './styles';

interface IMapDispatchToProps {
  closeCart: () => void;
  openCart: () => void;
}

interface IMapStateToProps {
  productsCart: IProductCart[];
  cartHidden: boolean;
  numberProducts: number;
}

interface IProps {
  productsCart: IProductCart[];
  cartHidden: boolean;
  closeCart: () => void;
  openCart: () => void;
  numberProducts: number;
}

const Card: React.FC<IProps> = ({
  productsCart = [],
  cartHidden,
  closeCart,
  openCart,
  numberProducts,
}: IProps) => {
  const styles = useStyles();

  return (
    <Box
      onMouseEnter={openCart}
      onMouseLeave={closeCart}
      className={styles.cardContainer}
    >
      <ShoppingCartIcon className={styles.cardIcon} />
      <Typography className={styles.cardProductsNumber}>
        {numberProducts}
      </Typography>

      <Fade in>
        <Box className={styles.productsContainer}>
          <ArrowDropUpIcon className={styles.arrowUp} />
          {productsCart.map((product) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ProductCart {...product} />
          ))}
        </Box>
      </Fade>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  closeCart: () => dispatch(hideCart()),
  openCart: () => dispatch(showCart()),
});

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  productsCart: selectProductsCart,
  cartHidden: selectCartHidden,
  numberProducts: selectQtdItemsCart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
