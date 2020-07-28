import React from 'react';

import Box from '@material-ui/core/Box';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import ProductCard from '../ProductCard';

import useStyles from './styles';

const Card: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <ArrowDropUpIcon className={styles.arrowUp} />
      <ProductCard />
    </Box>
  );
};

export default Card;
