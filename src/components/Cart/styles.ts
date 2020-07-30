import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    right: -30,
    position: 'absolute',
    boxShadow: '0px 0px 10px #999',
    width: 450,
    backgroundColor: '#fff',
    zIndex: 5,
  },

  arrowUp: {
    position: 'absolute',
    fontSize: 70,
    color: '#fff',
    top: -33,
    right: -19,
  },
});

export default useStyles;
