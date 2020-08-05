import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    marginTop: -6,
    position: 'relative',

    '&:hover': {
      '& > div#avatar_informations': {
        display: 'flex',
      },
    },
  },

  avatar: {
    height: 40,
    fontSize: 20,
  },

  avatarHoverContainer: {
    padding: 10,
    width: 100,
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px #999',
    position: 'absolute',
    marginTop: 60,
    left: -40,
    display: 'none',
    flexDirection: 'column',
    zIndex: 5,
    alignItems: 'center',
  },

  arrowUp: {
    position: 'absolute',
    fontSize: 60,
    top: -33,
    color: '#fff',
  },

  orders: {
    textDecoration: 'none',
    color: '#000',
    fontSize: 16,
    zIndex: 5,
  },

  logoutContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    cursor: 'pointer',
    zIndex: 5,
  },

  logoutIcon: {
    color: '#d0d0d0',
    fontSize: 20,
  },

  logout: {
    color: '#c9c9c9',
    fontSize: 14,
    marginLeft: 5,
  },

  loginButton: {
    color: '#000',
    border: 0,
    fontSize: 14,
  },
});

export default useStyles;
