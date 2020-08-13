import React from 'react';

import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import WithCart from '../WithCart';

import useStyles from './styles';
import { IProductCart } from '../../redux/cart/cart.interfaces';

interface IProps {
  productsCart: IProductCart[];
  totalCart: number;
}

const OrderDescription: React.FC<IProps> = ({
  productsCart,
  totalCart,
}: IProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.orderTitle}>Your Order</Typography>
      <Box className={styles.descriptionContainer} id="description">
        <Box className={styles.lineDescription}>
          <Typography className={styles.leftLineTitleDescription}>
            Product
          </Typography>
          <Typography className={styles.rightLineTitleDescription}>
            Total
          </Typography>
        </Box>
        {productsCart.map((product) => (
          <Box className={styles.lineDescription}>
            <Typography className={styles.leftLineProductDescription}>
              {product.name} <strong> x </strong> {product.quantity}
            </Typography>
            <Typography className={styles.rightLineProductDescription}>
              R$ {(product.price * product.quantity).toFixed(2)}
            </Typography>
          </Box>
        ))}
        <Box className={styles.lineDescription}>
          <Typography className={styles.leftLineTitleDescription}>
            Order Total
          </Typography>
          <Typography className={styles.rightLineTitleDescription}>
            R$ {totalCart.toFixed(2)}
          </Typography>
        </Box>
        <Link to="/shop">
          <Button className={styles.continueShoppingButton} fullWidth>
            Continue shopping
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default WithCart(OrderDescription);
