import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    marginTop: 280,
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  addProductTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default useStyles;
