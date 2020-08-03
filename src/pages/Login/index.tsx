import React from 'react';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import LoginForm from '../../components/LoginForm';

import useStyles from './styles';
import RegisterForm from '../../components/RegisterForm';

const Login: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.identificationTitle}>
        Identification
      </Typography>
      <Box className={styles.contentContainer}>
        <LoginForm />
        <RegisterForm />
      </Box>
    </Box>
  );
};

export default Login;
