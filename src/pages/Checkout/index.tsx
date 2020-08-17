import React, { useEffect, useState, useCallback } from 'react';
import { User } from 'firebase';
import { useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import WithUser from '../../components/WithUser';
import OrderDescription from '../../components/OrderDescription';
import CardPaymentForm from '../../components/CardPaymentForm';
import BankSlipPaymentForm from '../../components/BankSlipPaymentForm';

import useStyles from './styles';

interface IProps {
  currentUser: User;
}

const Checkout: React.FC<IProps> = ({ currentUser }: IProps) => {
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState('card');

  const payWithCard = useCallback(() => setPaymentMethod('card'), []);
  const payWithBankSlip = useCallback(() => setPaymentMethod('bankSlip'), []);

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
      <Box className={styles.paymentContainer}>
        <Box marginBottom="10px" display="flex">
          <Typography className={styles.paymentTitle}>Pay with:</Typography>
          <Button onClick={payWithCard} className={styles.paymentMethod}>
            Card
          </Button>
          <Button onClick={payWithBankSlip} className={styles.paymentMethod}>
            Bank Slip
          </Button>
        </Box>
        {paymentMethod === 'card' ? (
          <CardPaymentForm />
        ) : (
          <BankSlipPaymentForm />
        )}
      </Box>
      <OrderDescription />
    </Box>
  );
};

export default WithUser(Checkout);
