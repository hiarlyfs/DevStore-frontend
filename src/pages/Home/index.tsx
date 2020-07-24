import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Devstore from '../../asssets/DevStore.gif';

import useStyles from './styles';

const Home: React.FC = () => {
  const styles = useStyles({ image: Devstore });

  return (
    <Box className={styles.container}>
      <Box className={styles.contentContainer}>
        <Typography className={styles.title}>DevStore</Typography>
        <Typography className={styles.subtitle}>
          A store for developers
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
