import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';

import useStyles from './styles';

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

interface IProps extends IMapStateToProps {
  products: IProductCart[];
  total: number;
}

const Cart: React.FC<IProps> = ({ products, total }: IProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.cartTitle}>Cart</Typography>
      <Box className={styles.tableProductsContainer}>
        <Box className={styles.titleTable}>
          <Typography className={styles.productTitle}>Product</Typography>
          <Typography className={styles.productQuantity}>Quantity</Typography>
          <Typography className={styles.productUnitPrice}>
            Unit Price
          </Typography>
          <Typography className={styles.productTotalPrice}>Total</Typography>
        </Box>
      </Box>
      {products.map((product) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <CartItem key={product.id} {...product} />
      ))}

      <Box className={styles.footerContainer}>
        <Box display="flex" flexDirection="column">
          <Link to="/checkout">
            <Button variant="contained" className={styles.checkoutButton}>
              Proceed to checkout
            </Button>
          </Link>
          <Link to="/shop">
            <Button variant="outlined" className={styles.shoppingButton}>
              Continue Shopping
            </Button>
          </Link>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography className={styles.cartTotalTitle}>Cart Totals</Typography>
          <Typography className={styles.totals}>
            Subtotal:{' '}
            <span className={styles.totalPrice}>R$ {total.toFixed(2)}</span>
          </Typography>
          <Typography className={styles.totals}>
            Total:{' '}
            <span className={styles.totalPrice}>R$ {total.toFixed(2)}</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  products: selectProductsCart,
  total: selectTotalCart,
});

export default connect(mapStateToProps)(Cart);
