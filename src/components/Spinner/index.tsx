import React from 'react';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';

const Spinner: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <CircularProgress className={styles.spinner} />
    </Box>
  );
};

export default Spinner;
