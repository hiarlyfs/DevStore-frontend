import React from 'react';

import Box from '@material-ui/core/Box';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import ProductCart from '../ProductCart';

import useStyles from './styles';

const Card: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <ArrowDropUpIcon className={styles.arrowUp} />
      <ProductCart />
      <ProductCart />
      <ProductCart />
    </Box>
  );
};

export default Card;
