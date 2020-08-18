import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #d0d0d0',
    padding: 40,
    boxSizing: 'border-box',
    width: 500,
    paddingTop: 30,
    marginBottom: 20,
  },

  importantInformations: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
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

  errorMessage: {
    fontSize: 16,
    color: 'red',
  },
});

export default useStyles;
