import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  cardContainer: {
    flexDirection: 'row',
  },

  cardIcon: {
    fontSize: 28,
  },

  cardProductsNumber: {
    backgroundColor: 'orange',
    color: '#fff',
    position: 'absolute',
    borderRadius: 30,
    width: 17,
    textAlign: 'center',
    top: -10,
    right: -15,
    fontSize: 12,
    fontWeight: 'bold',
  },

  productsContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    right: -2,
    position: 'absolute',
    boxShadow: '0px 0px 10px #999',
    width: 450,
    marginTop: 10,
    backgroundColor: '#fff',
    zIndex: 5,
  },

  arrowUp: {
    position: 'absolute',
    fontSize: 70,
    color: '#fff',
    top: -33,
    right: -19,
  },
});

export default useStyles;
