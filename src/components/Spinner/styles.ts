import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100vw',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  spinner: {
    color: '#000',
    fontSize: 40,
  },
});

export default useStyles;
