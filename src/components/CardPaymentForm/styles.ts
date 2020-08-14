import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #d0d0d0',
    padding: 50,
    boxSizing: 'border-box',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  orderBt: {
    backgroundColor: '#000',
    color: '#fff',
    border: 0,
    fontSize: 16,
    marginTop: 15,

    '&:hover': {
      backgroundColor: '#0009',
    },
  },
});

export default useStyles;
