import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 6,
    padding: 20,
    width: 1000,
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  squareContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  squareTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009',
  },

  squareDetails: {
    fontSize: 14,
    fontWeight: 600,
  },
});

export default useStyles;
