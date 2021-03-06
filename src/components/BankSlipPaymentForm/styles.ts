import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #d0d0d0',
    padding: 30,
    boxSizing: 'border-box',
    width: 400,
  },

  importantInformations: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  selectCountryOptionContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  orderBt: {
    backgroundColor: '#FA8072',
    color: '#fff',
    border: 0,
    fontSize: 16,
    marginTop: 15,

    '&:hover': {
      backgroundColor: '#E9967A',
    },
  },

  errorMessage: {
    fontSize: 16,
    color: 'red',
  },
});

export default useStyles;
