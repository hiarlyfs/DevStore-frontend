import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  field: {
    width: 280,
    marginTop: 10,

    '& .MuiInputLabel-outlined': {
      marginTop: -3,
    },

    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      marginTop: 0,
    },

    '& .MuiInputBase-root': {
      height: 50,
    },
  },

  loginButton: {
    backgroundColor: '#1E90FF',
    color: '#fff',
    border: 0,
    fontSize: 16,
    marginTop: 10,

    '&:hover': {
      backgroundColor: '#00BFFF',
    },
  },

  loginGoogle: {
    backgroundColor: '#000',
    color: '#fff',
    border: 0,
    fontSize: 16,
    marginTop: 10,

    '&:hover': {
      backgroundColor: '#0009',
    },
  },
});

export default useStyles;
