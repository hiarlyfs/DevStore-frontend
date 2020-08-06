/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { INewUserData } from '../../redux/user/user.interfaces';
import { registerStart } from '../../redux/user/user.actions';
import { selectErrorRegister } from '../../redux/user/user.selectors';

import useStyles from './styles';
import { IReducer } from '../../redux/root-reducer.interface';

interface IMapDispatchToProps {
  register: (userData: INewUserData) => void;
}

interface IMapStateToProps {
  registerError: Error | null;
}

interface IProps extends IMapDispatchToProps, IMapStateToProps {}

// TODO: Callback de redirecionamento quando o registro de um novo
// usuario for bem sucedido

const RegisterForm: React.FC<IProps> = ({
  register,
  registerError,
}: IProps) => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setData({ ...data, [event.target.name]: event.target.value });
    },
    [data],
  );

  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>New user? Register now</Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = `${data.firstname} ${data.lastname}`;
          register({ ...data, name });
        }}
        method="post"
        className={styles.formContainer}
      >
        <Box className={styles.displayNameContainer}>
          <TextField
            error={!!registerError}
            value={data.firstname}
            onChange={onChangeInput}
            required
            variant="outlined"
            className={styles.fieldDisplayName}
            label="First Name"
            name="firstname"
          />
          <TextField
            error={!!registerError}
            value={data.lastname}
            onChange={onChangeInput}
            required
            variant="outlined"
            className={styles.fieldDisplayName}
            label="Last Name"
            name="lastname"
          />
        </Box>
        <TextField
          error={!!registerError}
          value={data.email}
          onChange={onChangeInput}
          required
          variant="outlined"
          className={styles.field}
          name="email"
          label="Email"
          type="email"
        />
        <TextField
          value={data.password}
          onChange={onChangeInput}
          required
          variant="outlined"
          className={styles.field}
          name="password"
          label="Password"
          type="password"
          error={!!registerError}
        />
        <TextField
          value={data.confirmPassword}
          onChange={onChangeInput}
          required
          variant="outlined"
          className={styles.field}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          error={!!registerError}
          helperText={registerError?.message}
        />
        <Button variant="outlined" type="submit" className={styles.registerBt}>
          Register Now
        </Button>
      </form>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  registerError: selectErrorRegister,
});

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  register: (userData) => dispatch(registerStart(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
