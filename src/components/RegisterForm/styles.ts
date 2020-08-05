import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  displayNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 380,
    marginTop: 8,
    justifyContent: 'space-between',
  },

  fieldDisplayName: {
    width: 180,

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

  field: {
    width: '100%',
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

  registerBt: {
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
