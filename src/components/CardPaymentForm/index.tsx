/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CircularProgress from '@material-ui/core/CircularProgress';
import WithPaymentForm from '../WithPaymentForm';
import PaymentInput from '../PaymentInput';
import SelectInstallments from '../SelectInstallments';

import { NumberCardMask, ExpiryMask } from './inputMasks';
import { IWithPaymentProvider } from '../interfaces/WithPaymentForm.interfaces';

import { startCheckoutWithCard } from '../../redux/checkout/checkout.actions';

import useStyles from './styles';
import { ICardOrderData } from '../../services/api/api.interfaces';

interface IMapDispatchToProps {
  checkout: (data: ICardOrderData, successCb?: () => void) => void;
}

interface IProps extends IWithPaymentProvider, IMapDispatchToProps {}

const CardPaymentForm: React.FC<IProps> = ({
  productsCart,
  totalCart,
  currentUser,
  orderError,
  ordering,
  checkout,
}: IProps) => {
  const styles = useStyles();
  const history = useHistory();

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

  const onChangeInstallments = useCallback(
    (
      event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
    ) => {
      setInstallments(event.target.value as number);
    },
    [],
  );

  const redirectAfterCheckout = (): void => history.push('/user/orders');

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
    checkout(data, redirectAfterCheckout);
  };

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
        <Box
          width="100%"
          marginTop="10px"
          display="flex"
          justifyContent="center"
        >
          {ordering && <CircularProgress />}
          {!ordering && orderError && (
            <Typography className={styles.errorMessage}>
              An error occured. Se your data and try again or use another
              payment form.
            </Typography>
          )}
        </Box>
      </form>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  checkout: (data, successCb) =>
    dispatch(startCheckoutWithCard(data, successCb)),
});

export default WithPaymentForm(
  connect(null, mapDispatchToProps)(CardPaymentForm),
);
