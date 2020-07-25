import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    width: '100vw',
    marginTop: 250,
  },

  title: {
    fontSize: 35,
    fontWeight: 500,
  },

  subtitle: {
    fontSize: 24,
    fontWeight: 400,
  },

  productsGridContainer: {
    width: '95vw',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 0,
  },

  productGridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '@media (max-width: 1049px)': {
      marginLeft: 30,
    },
  },
});

export default useStyles;
