import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CartItem from '../../components/CartItem';

import useStyles from './styles';

import { selectProductsCart } from '../../redux/cart/cart.selectors';
import { IProductCart } from '../../redux/cart/cart.interfaces';
import { IReducer } from '../../redux/root-reducer.interface';

interface IMapStateToProps {
  products: IProductCart[];
}

interface IProps extends IMapStateToProps {
  products: IProductCart[];
}

const Cart: React.FC<IProps> = ({ products }: IProps) => {
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
    </Box>
  );
};

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  products: selectProductsCart,
});

export default connect(mapStateToProps)(Cart);
