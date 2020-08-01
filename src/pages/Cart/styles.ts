import { makeStyles } from '@material-ui/styles';
import {
  productQuantityWidth,
  productTitleWidth,
  productUnitPriceWidth,
  productTotalPriceWidth,
} from '../../variablesStyles/Cart';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 240,
    width: '100%',
    alignItems: 'center',
  },

  cartTitle: {
    fontSize: 34,
    fontWeight: 'bold',
  },

  tableProductsContainer: {
    display: 'flex',
    flexDIrection: 'column',
    marginTop: 40,
  },

  titleTable: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottom: '1px solid',
  },

  productTitle: {
    width: productTitleWidth,
    textAlign: 'center',
    boxShadow: 'border-box',
  },

  productQuantity: {
    width: productQuantityWidth,
    textAlign: 'center',
    boxShadow: 'border-box',
  },

  productUnitPrice: {
    width: productUnitPriceWidth,
    textAlign: 'center',
    boxShadow: 'border-box',
  },

  productTotalPrice: {
    width: productTotalPriceWidth,
    textAlign: 'center',
    boxShadow: 'border-box',
  },
});

export default useStyles;
