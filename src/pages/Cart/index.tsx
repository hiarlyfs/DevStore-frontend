/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import CartItem from '../../components/CartItem';
import WithCart from '../../components/WithCart';

import useStyles from './styles';
import { IProductCart } from '../../redux/cart/cart.interfaces';

interface IProps {
  productsCart: IProductCart[];
  totalCart: number;
}

const Cart: React.FC<IProps> = ({ productsCart, totalCart }: IProps) => {
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
      {productsCart.map((product) => (
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
            <span className={styles.totalPrice}>R$ {totalCart.toFixed(2)}</span>
          </Typography>
          <Typography className={styles.totals}>
            Total:{' '}
            <span className={styles.totalPrice}>R$ {totalCart.toFixed(2)}</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WithCart(Cart);
