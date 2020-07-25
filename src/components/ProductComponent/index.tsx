import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Fade from '@material-ui/core/Fade';

import { Product } from '../../types/Products';

import useStyles from './styles';

const ProductComponent: React.FC<Product> = ({
  image,
  name,
  price,
}: Product) => {
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
          <Button className={styles.addToCardBt} variant="outlined">
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

export default ProductComponent;
