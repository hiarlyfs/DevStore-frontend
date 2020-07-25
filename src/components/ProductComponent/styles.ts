import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    position: 'relative',

    // '&:hover': {
    //   '& > div': {
    //     display: 'flex',
    //   },
    // },
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

  hoverContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    width: '80%',
    alignSelf: 'center',
    bottom: 20,
    padding: 15,
  },

  priceHover: {
    fontSize: 20,
    fontWeight: 600,
    color: '#d12',
  },

  addToCardBt: {
    color: '#fff',
    backgroundColor: '#000',
    marginTop: 20,

    '&:hover': {
      backgroundColor: '#0019',
    },
  },

  btMessage: {
    marginLeft: 10,
  },
});

export default useStyles;
