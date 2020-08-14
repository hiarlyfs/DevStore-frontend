import React, { useEffect } from 'react';
import { User } from 'firebase';
import { useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import WithUser from '../../components/WithUser';
import OrderDescription from '../../components/OrderDescription';
import CardPaymentForm from '../../components/CardPaymentForm';

import useStyles from './styles';

interface IProps {
  currentUser: User;
}

const Checkout: React.FC<IProps> = ({ currentUser }: IProps) => {
  const history = useHistory();

  useEffect(() => {
    if (!currentUser)
      history.push({
        pathname: '/login',
        state: { afterLoginRedirectTo: '/checkout' },
      });
  }, [currentUser, history]);

  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <OrderDescription />
      <CardPaymentForm />
    </Box>
  );
};

export default WithUser(Checkout);
