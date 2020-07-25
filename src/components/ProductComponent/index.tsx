import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Product } from '../../types/Products';

import useStyles from './styles';

const ProductComponent: React.FC<Product> = ({
  image,
  name,
  price,
}: Product) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <img src={image} alt="Product" className={styles.productImage} />
      <Box
        marginTop={2}
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="end"
        display="flex"
        flexDirection="column"
      >
        <Typography className={styles.name}>{name}</Typography>
        <Typography className={styles.price}>R${price.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};

export default ProductComponent;
