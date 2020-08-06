/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { FcGoogle } from 'react-icons/fc';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import { selectErrorLogin } from '../../redux/user/user.selectors';

import useStyles from './styles';
import { IReducer } from '../../redux/root-reducer.interface';

interface IMapDispatchToProps {
  signInWithGoogle: () => void;
  signInWithEmail: (emailAndPassword: {
    email: string;
    password: string;
  }) => void;
}

interface IMapStateToProps {
  loginError: Error | null;
}

interface IProps extends IMapStateToProps, IMapDispatchToProps {}

// TODO: Callback de redirecionamento quando o login
// tdo usuario for bem sucedido

const LoginForm: React.FC<IProps> = ({
  signInWithGoogle,
  signInWithEmail,
  loginError,
}: IProps) => {
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
          error={!!loginError}
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
          error={!!loginError}
          helperText={loginError?.message}
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
              signInWithEmail({ email, password });
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

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmail: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  loginError: selectErrorLogin,
});

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm),
);
