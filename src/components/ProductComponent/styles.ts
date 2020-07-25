import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },

  productImage: {
    maxWidth: '250px',
    maxHeight: ' 300px',
    width: 'auto',
    height: 'auto',
  },

  name: {
    fontSize: 20,
    fontWeight: 600,
    color: '#000',
  },

  price: {
    fontSize: 14,
    color: 'gray',
  },
});

export default useStyles;
