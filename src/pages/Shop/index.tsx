/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useLocation } from 'react-router-dom';
import { Dispatch } from 'redux';

import ProductComponent from '../../components/ProductComponent';

import useStyles from './styles';

import { fetchProductsStart } from '../../redux/products/products.actions';
import { selectProductsItem } from '../../redux/products/products.selectors';
import { Product } from '../../types/Products';

interface IMapDispatchToProps {
  getProducts: () => void;
}

interface IMapStateToProps {
  products: Product[];
}

interface IProps extends IMapDispatchToProps, IMapStateToProps {
  getProducts: () => void;
  products: Product[];
}

const Shop: React.FC<IProps> = ({ getProducts, products }: IProps) => {
  const { search } = useLocation();
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  const category = new URLSearchParams(search).get('category');

  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Our Products</Typography>
      <Typography className={styles.subtitle}>
        Choose with intelligence
      </Typography>
      <Grid className={styles.productsGridContainer} container spacing={10}>
        {products.map((product) => (
          <Grid key={product.id} lg={4} className={styles.productGridItem} item>
            <ProductComponent {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  getProducts: () => dispatch(fetchProductsStart()),
});

const mapStateToProps = createStructuredSelector<any, any>({
  products: selectProductsItem,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
