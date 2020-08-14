import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
  },

  inputField: {
    width: (props: { inputWidth?: number }) => props.inputWidth || '100%',
    borderRadius: '6px',
    backgroundColor: '#fff',
    fontSize: '18px',
    marginTop: '3px',

    '& .MuiInputBase-input': {
      padding: 10,
      fontSize: '16px',
      color: '#000',
    },

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
});

export default useStyles;
