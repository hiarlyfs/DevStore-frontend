import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 35,
  },

  containerMenuOption: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    position: 'relative',
  },

  cardContainer: {
    right: '15vw',
    position: 'absolute',
    display: 'flex',
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

  logoLoja: {
    maxHeight: '71px',
    height: '100%',
    maxWidth: '201px',
    width: '100%',
  },

  menuOption: {
    fontSize: '18px',
    color: '#000',
    padding: 15,

    '&:hover': {
      backgroundColor: '#e9e9e9',
    },
  },

  link: {
    textDecoration: 'none',
    color: '#000',
  },
});

export default useStyles;
