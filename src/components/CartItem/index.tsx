/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';

import { Dispatch } from 'redux';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import QuantityProduct from '../QuantityProduct';

import { deleteProduct } from '../../redux/cart/cart.actions';
import { IProductCart } from '../../redux/cart/cart.interfaces';

import useStyles from './styles';

interface IMapDispatchToProps {
  removeProduct: (idProduct: number) => void;
}

interface IProps extends IProductCart, IMapDispatchToProps {}

const CartItem: React.FC<IProps> = ({
  id,
  image,
  quantity,
  price,
  name,
  removeProduct,
}: IProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Box className={styles.productTitleContainer}>
        <img className={styles.imageProduct} src={image} alt={name} />
        <Typography className={styles.productTitle}>{name}</Typography>
      </Box>
      <Box className={styles.quantityProduct}>
        <QuantityProduct id={id} quantity={quantity} />
        <Typography
          onClick={() => removeProduct(id)}
          className={styles.removeProduct}
        >
          x Remove
        </Typography>
      </Box>
      <Box className={styles.unitProductPrice}>
        <Typography>R$ {price.toFixed(2)}</Typography>
      </Box>
      <Box className={styles.totalProduct}>
        <Typography>R$ {(quantity * price).toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  removeProduct: (idProduct: number) => dispatch(deleteProduct(idProduct)),
});

export default connect(null, mapDispatchToProps)(CartItem);
