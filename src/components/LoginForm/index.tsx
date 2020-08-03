import React, { useState, useCallback } from 'react';

import { FcGoogle } from 'react-icons/fc';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { signInWithGoogle, signIn } from '../../firebase/firebaseUtils';

import useStyles from './styles';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Sign In</Typography>
      <form className={styles.formContainer}>
        <TextField
          onChange={onChangeEmail}
          value={email}
          className={styles.field}
          required
          variant="outlined"
          label="E-mail"
          name="email"
          type="email"
        />
        <TextField
          onChange={onChangePassword}
          value={password}
          className={styles.field}
          variant="outlined"
          required
          label="Password"
          name="password"
          type="password"
        />
        <Button
          onClick={(event) => {
            if (email && password) {
              event.preventDefault();
              signIn(email, password);
            }
          }}
          className={styles.loginButton}
          variant="outlined"
          type="submit"
        >
          Login with email
        </Button>
      </form>
      <Button
        onClick={() => signInWithGoogle()}
        className={styles.loginGoogle}
        variant="outlined"
        type="button"
      >
        <FcGoogle style={{ marginRight: 10, fontSize: 20 }} />
        Login with Google
      </Button>
    </Box>
  );
};

export default React.memo(LoginForm);
