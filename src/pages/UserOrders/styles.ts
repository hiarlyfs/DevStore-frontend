import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '100vw',
    marginTop: 280,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'start',
  },

  ordersContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default useStyles;
