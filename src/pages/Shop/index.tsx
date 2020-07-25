/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useLocation } from 'react-router-dom';

import ProductComponent from '../../components/ProductComponent';

import useStyles from './styles';

import { getProducts } from '../../services/api/apiProducts';
import { Product } from '../../types/Products';

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { search } = useLocation();
  const category = new URLSearchParams(search).get('category');

  const styles = useStyles();

  useEffect(() => {
    if (category) {
      getProducts('local', category).then(setProducts);
    } else {
      getProducts('local').then(setProducts);
    }
  }, [category]);

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Our Products</Typography>
      <Typography className={styles.subtitle}>
        Choose with intelligence
      </Typography>
      <Grid className={styles.productsGridContainer} container spacing={10}>
        {products.map((product) => (
          <Grid lg={4} className={styles.productGridItem} item>
            <ProductComponent {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shop;
