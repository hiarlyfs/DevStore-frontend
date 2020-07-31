import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid #d3d3d3',
    paddingLeft: 3,
  },

  quantity: {
    textAlign: 'center',
    color: '#900',
    marginRight: 3,
    borderRight: '1px solid #d3d3d3',
    borderLeft: '1px solid #d3d3d3',
    padding: 4,
  },

  arrow: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default useStyles;
