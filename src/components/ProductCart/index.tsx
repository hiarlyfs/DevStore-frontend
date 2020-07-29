import React from 'react';

import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

import image from '../../asssets/intellij.jpg';

const ProductCard: React.FC = () => {
  const containerStyles = clsx(useStyles().container);
  const styles = useStyles();

  return (
    <Box className={containerStyles}>
      <img src={image} alt="Product" className={styles.productImage} />
      <Typography className={styles.nameProduct}>
        Intellijaaaaaaaaaaaaa
      </Typography>
      <Typography className={styles.productPrice}>R$ 300.00</Typography>
    </Box>
  );
};

export default ProductCard;
