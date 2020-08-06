import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LoginForm from '../../components/LoginForm';
import Spinner from '../../components/Spinner';

import useStyles from './styles';
import RegisterForm from '../../components/RegisterForm';

import { IReducer } from '../../redux/root-reducer.interface';
import { selectIsLogin } from '../../redux/user/user.selectors';

interface IMapStateToProps {
  isLoging: boolean;
}

const Login: React.FC<IMapStateToProps> = ({ isLoging }: IMapStateToProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.identificationTitle}>
        Identification
      </Typography>
      <Box className={styles.contentContainer}>
        {isLoging ? (
          <Box className={styles.spinnerContainer}>
            <Spinner />
          </Box>
        ) : null}
        <LoginForm />
        <RegisterForm />
      </Box>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  isLoging: selectIsLogin,
});

export default connect(mapStateToProps)(Login);
