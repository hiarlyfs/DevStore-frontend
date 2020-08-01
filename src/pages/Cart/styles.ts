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

  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 990,
    boxSizing: 'border-box',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(250, 250, 250)',
    padding: 20,
    marginTop: 25,
    alignItems: 'center',
    marginBottom: 10,
  },

  cartTotalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  totals: {
    marginTop: 5,
    fontSize: 22,
    color: '#a9a9a9',
    fontWeight: 'bold',
  },

  totalPrice: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },

  checkoutButton: {
    backgroundColor: '#1E90FF',
    color: '#fff',
    border: 0,
    width: 250,
    fontSize: 18,

    '&:hover': {
      backgroundColor: '#00BFFF',
    },
  },

  shoppingButton: {
    marginTop: 10,
    color: '#000',
    border: '1px solid #00BFFF',
    fontSize: 18,
    width: 250,

    '&:hover': {
      marginTop: 10,
      color: '#fff',
      border: 0,
      backgroundColor: '#1E90FF',
    },
  },
});

export default useStyles;
