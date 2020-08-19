import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import OrderDescription from '../../components/OrderDescription';
import CardPaymentForm from '../../components/CardPaymentForm';
import BankSlipPaymentForm from '../../components/BankSlipPaymentForm';
import RequiredUser from '../../components/RequiredUser';

import useStyles from './styles';

const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const payWithCard = useCallback(() => setPaymentMethod('card'), []);
  const payWithBankSlip = useCallback(() => setPaymentMethod('bankSlip'), []);

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

export default RequiredUser(Checkout, '/checkout');
