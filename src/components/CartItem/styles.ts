import { makeStyles } from '@material-ui/styles';
import {
  productTitleWidth,
  productQuantityWidth,
  productUnitPriceWidth,
  productTotalPriceWidth,
} from '../../variablesStyles/Cart';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  productTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: productTitleWidth,
    alignItems: 'center',
    minHeight: 144,
  },

  imageProduct: {
    maxWidth: 144,
    maxHeight: 144,
    width: 'auto',
    height: 'auto',
  },

  productTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    maxWidth: 309,
    overflow: 'hidden',
    wordWrap: 'break-word',
  },

  quantityProduct: {
    width: productQuantityWidth,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  removeProduct: {
    fontSize: 14,
    marginTop: 10,
    color: '#696969',
    cursor: 'pointer',
  },

  unitProductPrice: {
    width: productUnitPriceWidth,
    display: 'flex',
    justifyContent: 'center',
  },

  totalProduct: {
    width: productTotalPriceWidth,
    display: 'flex',
    justifyContent: 'center',

    '& > p': {
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
});

export default useStyles;
