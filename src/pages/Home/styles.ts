import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    alignItems: 'center',
  },

  contentContainer: {
    backgroundImage: (props: { image: string }) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: 220,
    width: 1100,
    height: 620,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 100,
  },

  subtitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 5,
  },
});

export default useStyles;
