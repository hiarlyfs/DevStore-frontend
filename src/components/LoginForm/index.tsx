/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

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
import { IUserLoginCredential } from '../../redux/user/user.interfaces';

interface IMapDispatchToProps {
  signInWithGoogle: (successCb?: () => void) => void;
  signInWithEmail: (
    emailAndPassword: IUserLoginCredential,
    successCb?: () => void,
  ) => void;
}

interface IMapStateToProps {
  loginError: Error | null;
}

interface IStatePage {
  afterLoginRedirectTo?: string;
}

interface IProps extends IMapStateToProps, IMapDispatchToProps {}

const LoginForm: React.FC<IProps> = ({
  signInWithGoogle,
  signInWithEmail,
  loginError,
}: IProps) => {
  const history = useHistory();
  const { state } = useLocation<IStatePage>();
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

  const redirectAfterLoginSuccess = (): void => {
    if (state?.afterLoginRedirectTo) history.push(state.afterLoginRedirectTo);
    else history.push('/shop');
  };

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
              signInWithEmail({ email, password }, redirectAfterLoginSuccess);
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
        onClick={() => signInWithGoogle(redirectAfterLoginSuccess)}
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
  signInWithGoogle: (successCb) => dispatch(googleSignInStart(successCb)),
  signInWithEmail: (emailAndPassword, successCb) =>
    dispatch(emailSignInStart(emailAndPassword, successCb)),
});

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  loginError: selectErrorLogin,
});

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm),
);
