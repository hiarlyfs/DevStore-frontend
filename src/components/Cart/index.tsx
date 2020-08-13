import React from 'react';

import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Box from '@material-ui/core/Box';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Fade from '@material-ui/core/Fade';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';

import { Button } from '@material-ui/core';
import ProductCart from '../ProductCart';
import WithCart from '../WithCart';

import { IReducer } from '../../redux/root-reducer.interface';

import { IProductCart } from '../../redux/cart/cart.interfaces';
import {
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
  cartHidden: boolean;
  numberProducts: number;
}

interface IProps {
  productsCart: IProductCart[];
  cartHidden: boolean;
  closeCart: () => void;
  openCart: () => void;
  numberProducts: number;
  totalCart: number;
}

const Cart: React.FC<IProps> = ({
  productsCart = [],
  cartHidden,
  closeCart,
  openCart,
  numberProducts,
  totalCart = 0,
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

      <Fade in={!cartHidden}>
        <Box className={styles.productsContainer}>
          <ArrowDropUpIcon className={styles.arrowUp} />
          {productsCart.map((product) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ProductCart key={product.id} {...product} />
          ))}
          {productsCart.length > 0 ? (
            <Box>
              <Box className={styles.totalContainer}>
                <Typography className={styles.totalCart}>Total</Typography>
                <Typography className={styles.priceTotalCart}>
                  R${totalCart.toFixed(2)}
                </Typography>
              </Box>
              <Link to="/cart">
                <Button
                  variant="outlined"
                  fullWidth
                  className={styles.checkoutButton}
                >
                  Go to cart
                </Button>
              </Link>
            </Box>
          ) : (
            <Typography className={styles.emptyMessage}>
              Your cart is empty
            </Typography>
          )}
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
  cartHidden: selectCartHidden,
  numberProducts: selectQtdItemsCart,
});

export default WithCart(connect(mapStateToProps, mapDispatchToProps)(Cart));
