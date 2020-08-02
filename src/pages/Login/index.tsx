import React from 'react';

import Box from '@material-ui/core/Box';

import LoginForm from '../../components/LoginForm';

import useStyles from './styles';
import RegisterForm from '../../components/RegisterForm';

const Login: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <LoginForm />
      <RegisterForm />
    </Box>
  );
};

export default Login;
