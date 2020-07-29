import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  productImage: {
    maxHeight: 40,
    maxWidth: 40,
    height: 'auto',
    width: 'auto',
  },

  nameProduct: {
    color: '#000',
    fontSize: 20,
    maxWidth: 80,
    overflowWrap: 'break-word',
  },

  productPrice: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default useStyles;
