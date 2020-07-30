import React from 'react';

import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

import { IProductCart } from '../../redux/cart/cart.interfaces';

const ProductCard: React.FC<IProductCart> = ({
  id,
  name,
  price,
  quantity,
  image,
}: IProductCart) => {
  const containerStyles = clsx(useStyles().container);
  const styles = useStyles();

  return (
    <Box className={containerStyles}>
      <img src={image} alt="Product" className={styles.productImage} />
      <Typography className={styles.nameProduct}>{name}</Typography>
      {/* TODO criar componente de alterar quantidade do produto no cart */}
      <Typography className={styles.productPrice}>
        R$ {price.toFixed(2)}
      </Typography>
    </Box>
  );
};

export default ProductCard;
