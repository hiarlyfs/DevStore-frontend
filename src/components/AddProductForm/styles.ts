import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
  },

  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 25,
  },

  fieldTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },

  btSubmit: {
    backgroundColor: '#111',
    color: '#fff',

    '&:hover': {
      backgroundColor: '#0008',
    },
  },
});

export default useStyles;
