import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 250,
    width: '100%',
  },

  identificationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  contentContainer: {
    marginTop: 50,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },

  spinnerContainer: {
    position: 'absolute',
    display: 'flex',
    height: '100%',
    width: '100%',

    '& > div': {
      alignItems: 'center',
    },
  },
});

export default useStyles;
