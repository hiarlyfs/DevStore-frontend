/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Dispatch } from 'redux';

import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Fade from '@material-ui/core/Fade';

import { Product } from '../../types/Products';

import { addToCard, showCart, hideCart } from '../../redux/cart/cart.actions';

import useStyles from './styles';

interface IMapDispatchToProps {
  addProductToCart: (product: Product) => void;
  openCart: () => void;
  closeCart: () => void;
}

interface IProps extends IMapDispatchToProps, Product {}

const ProductComponent: React.FC<IProps> = ({
  image,
  name,
  price,
  category,
  id,
  addProductToCart,
  openCart,
  closeCart,
}: IProps) => {
  const styles = useStyles();
  const [showDetails, setShowDetails] = useState(false);

  const openDetails = (): void => setShowDetails(true);
  const closeDetails = (): void => setShowDetails(false);

  return (
    <Box
      onMouseEnter={openDetails}
      onMouseLeave={closeDetails}
      className={styles.container}
    >
      <Fade in={showDetails}>
        <Box className={styles.hoverContainer}>
          <Typography className={styles.name}>{name}</Typography>
          <Typography className={styles.priceHover}>
            R${price.toFixed(2)}
          </Typography>
          <Button
            onClick={() => {
              addProductToCart({ image, price, category, id, name });
              openCart();
              setTimeout(() => closeCart(), 2000);
            }}
            className={styles.addToCardBt}
            variant="outlined"
          >
            <AddShoppingCartIcon fontSize="small" />
            <Typography className={styles.btMessage}>Add to Cart</Typography>
          </Button>
        </Box>
      </Fade>
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

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  addProductToCart: (product: Product) => dispatch(addToCard(product)),
  openCart: () => dispatch(showCart()),
  closeCart: () => dispatch(hideCart()),
});

export default connect(null, mapDispatchToProps)(ProductComponent);
