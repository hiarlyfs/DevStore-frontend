import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 280,
    width: '100vw',
    justifyContent: 'center',
  },

  paymentContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 20,
    alignItems: 'center',
  },

  paymentTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  paymentMethod: {
    boxSizing: 'border-box',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#d9d9d9',
    marginLeft: 10,
  },
});

export default useStyles;
