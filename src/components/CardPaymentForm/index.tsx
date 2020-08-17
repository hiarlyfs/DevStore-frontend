import React, { useState, useCallback, useRef } from 'react';

import { User } from 'firebase';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import WithPaymentForm from '../WithPaymentForm';
import PaymentInput from '../PaymentInput';
import SelectInstallments from '../SelectInstallments';

import { NumberCardMask, ExpiryMask } from './inputMasks';

import useStyles from './styles';
import { IProductCart } from '../../redux/cart/cart.interfaces';

interface IProps {
  productsCart: IProductCart[];
  totalCart: number;
  user: User;
}

const CardPaymentForm: React.FC<IProps> = ({
  productsCart,
  user,
  totalCart,
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
      <Cards
        cvc={cvc}
        expiry={cardExpiry}
        focused={cardFocus}
        name={holderName}
        number={cardNumber}
      />
      <form className={styles.formContainer}>
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
