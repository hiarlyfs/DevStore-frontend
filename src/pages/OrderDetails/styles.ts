import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    marginTop: 250,
    width: '100%',
    alignItems: 'center',
  },

  headerInformations: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    padding: 10,
    width: 920,
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    border: '1px #ddd solid',
  },

  informationLine: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  informationTitle: {
    fontSize: 18,
    color: '#111',
  },

  informationValue: {
    fontsize: 20,
    fontWeight: 'bold',
    color: '#555',
  },

  simulatePaymentBt: {
    marginLeft: 10,
    backgroundColor: '#228B22',
    color: '#fff',
    fontSize: 14,

    '&:hover': {
      backgroundColor: '#228B22',
      opacity: 0.9,
    },
  },

  paymentIcon: {
    marginLeft: 10,
  },

  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    width: 920,
    border: '1px #ddd solid',
    boxSizing: 'border-box',
    paddingLeft: 30,
  },

  imgItem: {
    maxWidth: 100,
    maxHeight: 120,
    width: 'auto',
    height: 'auto',
  },

  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },

  itemDescriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
  },

  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  itemQuantiy: {
    fontSize: 18,
    color: '#111',
  },

  itemTotal: {
    color: '#555',
    fontWeight: 'bold',
  },
});

export default useStyles;
