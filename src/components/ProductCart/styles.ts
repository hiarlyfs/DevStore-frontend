import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '2px solid #d3d3d3',
    marginBottom: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },

  productImage: {
    maxHeight: 40,
    maxWidth: 40,
    height: 'auto',
    width: 'auto',
  },

  nameProduct: {
    color: '#000',
    fontSize: 20,
    maxWidth: 200,
    width: '100%',
    overflowWrap: 'break-word',
  },

  productPrice: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: '120px',
    textAlign: 'end',
    width: '100%',
  },
});

export default useStyles;
