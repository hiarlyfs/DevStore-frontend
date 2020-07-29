/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { useLocation } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Spinner from '../../components/Spinner';
import ProductComponent from '../../components/ProductComponent';

import useStyles from './styles';

import { fetchProductsStart } from '../../redux/products/products.actions';
import {
  selectProductsItems,
  selectIsFetchingProducts,
  selectFailureProducts,
} from '../../redux/products/products.selectors';
import { Product } from '../../types/Products';
import { IProductsReducerState } from '../../redux/products/products.interface';

interface ISelectorStateToProps {
  products: IProductsReducerState;
}

interface IMapDispatchToProps {
  getProducts: (category?: string) => void;
}

interface IMapStateToProps {
  products: Product[];
  loadingProducts: boolean;
  failure: Error | null;
}

interface IProps extends IMapDispatchToProps, IMapStateToProps {}

const Shop: React.FC<IProps> = ({
  getProducts,
  products,
  loadingProducts,
  failure,
}: IProps) => {
  const { search } = useLocation();
  const categoryUrl = new URLSearchParams(search).get('category');

  useEffect(() => {
    getProducts(categoryUrl || '');
  }, [getProducts, categoryUrl]);

  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Our Products</Typography>
      <Typography className={styles.subtitle}>
        Choose with intelligence
      </Typography>

      {loadingProducts ? (
        <Spinner />
      ) : (
        <Grid className={styles.productsGridContainer} container spacing={10}>
          {products.map((product) => {
            const { id, image, name, price, category } = product;

            return (
              <Grid
                key={product.id}
                lg={4}
                className={styles.productGridItem}
                item
              >
                <ProductComponent
                  id={id}
                  name={name}
                  price={price}
                  category={category}
                  image={image}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  getProducts: (category?: string) => dispatch(fetchProductsStart(category)),
});

const mapStateToProps = createStructuredSelector<
  ISelectorStateToProps,
  IMapStateToProps
>({
  products: selectProductsItems,
  loadingProducts: selectIsFetchingProducts,
  failure: selectFailureProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
