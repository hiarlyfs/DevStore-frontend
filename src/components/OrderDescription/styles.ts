import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 540,
  },

  orderTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #d0d0d0',
    padding: 50,
    boxSizing: 'border-box',
    marginTop: 10,
  },

  leftLineTitleDescription: {
    maxWidth: 300,
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },

  rightLineTitleDescription: {
    width: 120,
    fontSize: 16,
    fontWeight: 'bold',
  },

  lineDescription: {
    width: 442,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #d0d0d0',
    padding: 12,
  },

  leftLineProductDescription: {
    maxWidth: 300,
    width: '100%',
    fontSize: 16,
  },

  rightLineProductDescription: {
    width: 120,
    fontSize: 16,
  },
  continueShoppingButton: {
    backgroundColor: '#930077',
    color: '#fff',
    border: 0,
    fontSize: 16,

    '&:hover': {
      backgroundColor: '#930077',
      opacity: 0.9,
    },
  },
});

export default useStyles;
