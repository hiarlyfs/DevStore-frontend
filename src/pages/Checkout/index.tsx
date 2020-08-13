import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';

import { User } from 'firebase';

import { createStructuredSelector } from 'reselect';
import { IReducer } from '../../redux/root-reducer.interface';
import { selectUser } from '../../redux/user/user.selectors';

import OrderDescription from '../../components/OrderDescription';

import useStyles from './styles';

interface IMapStateToProps {
  user: User | null;
}

const Checkout: React.FC<IMapStateToProps> = ({ user }: IMapStateToProps) => {
  const history = useHistory();

  useEffect(() => {
    if (!user)
      history.push({
        pathname: '/login',
        state: { afterLoginRedirectTo: '/checkout' },
      });
  }, [user, history]);

  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <OrderDescription />
      <div>ola</div>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  user: selectUser,
});

export default connect(mapStateToProps)(Checkout);
