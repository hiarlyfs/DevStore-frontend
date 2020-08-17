import React, { useState, useCallback } from 'react';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import WithPaymentForm from '../WithPaymentForm';
import PaymentInput from '../PaymentInput';
import SelectInstallments from '../SelectInstallments';

import { NumberCardMask, ExpiryMask } from './inputMasks';

import useStyles from './styles';

import { payWithCard } from '../../services/api/apiCheckout';
import { IWithPaymentProvider } from '../interfaces/WithPaymentForm.interfaces';

type IProps = IWithPaymentProvider;

const CardPaymentForm: React.FC<IProps> = ({
  productsCart,
  totalCart,
  currentUser,
  clearCart,
}: IProps) => {
  const styles = useStyles();

  const [cardNumber, setCardNumber] = useState('');
  const [holderName, setHolderName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [installments, setInstallments] = useState(1);

  const [cardFocus, setCardFocus] = useState<
    'name' | 'number' | 'cvc' | 'expiry' | undefined
  >(undefined);

  const onChangeCardNumber = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardNumber(event.target.value);
      setCardFocus('number');
    },
    [],
  );

  const onChangeHolderName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setHolderName(event.target.value);
      setCardFocus('name');
    },
    [],
  );

  const onChangeCardExpiry = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardExpiry(event.target.value);
      setCardFocus('expiry');
    },
    [],
  );

  const onChangeCvc = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCvc(event.target.value);
      setCardFocus('cvc');
    },
    [],
  );

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = {
      clientId: currentUser.uid,
      amount: totalCart,
      cardNumber: cardNumber.split(' ').join(''),
      cardHolderName: holderName,
      cardExpirationDate: cardExpiry.replace('/', ''),
      cardCvv: cvc,
      installments,
      items: productsCart,
    };
    payWithCard(data).then(() => {
      clearCart();
    });
  };

  const onChangeInstallments = useCallback(
    (
      event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
    ) => {
      setInstallments(event.target.value as number);
    },
    [],
  );

  return (
    <Box className={styles.container}>
      <Box marginBottom="20px" display="flex" flexDirection="column">
        <Typography className={styles.importantInformations}>
          IMPORTANT!!
        </Typography>
        <Typography className={styles.importantInformations}>
          Do not put a real credit card number here. You can look for some fake
          credit card numbers{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.freeformatter.com/credit-card-number-generator-validator.html"
          >
            here
          </a>{' '}
          or you can create your own card number.
        </Typography>
        <Typography className={styles.importantInformations}>
          In expiry you can put any date after the current date. In Cvc you can
          put any number of 3 digits.
        </Typography>
      </Box>
      <Cards
        cvc={cvc}
        expiry={cardExpiry}
        focused={cardFocus}
        name={holderName}
        number={cardNumber}
      />
      <form onSubmit={onSubmitForm} className={styles.formContainer}>
        <PaymentInput
          value={cardNumber}
          onChange={onChangeCardNumber}
          title="Card Number"
          required
          name="number"
          placeholder="ex: 0000 0000 0000 0000"
          inputComponent={NumberCardMask}
        />
        <PaymentInput
          title="Card Holder Name"
          required
          value={holderName}
          onChange={onChangeHolderName}
          name="name"
          placeholder="ex: YOUR NAME HERE"
        />
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          flexDirection="row"
        >
          <PaymentInput
            value={cardExpiry}
            onChange={onChangeCardExpiry}
            title="Card Expiry"
            required
            name="expiry"
            placeholder="ex: 11/20"
            inputWidth={160}
            inputComponent={ExpiryMask}
          />
          <PaymentInput
            value={cvc}
            onChange={onChangeCvc}
            title="CVC"
            required
            name="cvc"
            placeholder="ex: 123"
            inputWidth={100}
          />
        </Box>
        <SelectInstallments
          value={installments}
          onChange={onChangeInstallments}
          totalCart={totalCart / 100}
          qtdInstallments={5}
        />
        <Button type="submit" className={styles.orderBt} variant="outlined">
          Order Now
        </Button>
      </form>
    </Box>
  );
};

export default WithPaymentForm(CardPaymentForm);
