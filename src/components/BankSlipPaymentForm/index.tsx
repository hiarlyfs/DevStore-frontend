/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PaymentInput from '../PaymentInput';
import SelectCountry from '../SelectCountry';

import { CPFInputMask } from './inputMasks';

import useStyles from './styles';
import WithPaymentForm from '../WithPaymentForm';
import { IWithPaymentProvider } from '../interfaces/WithPaymentForm.interfaces';

import { payWithBankSlip } from '../../services/api/apiCheckout';

type IProps = IWithPaymentProvider;

const BankSlipPaymentForm: React.FC<IProps> = ({
  currentUser,
  totalCart,
  productsCart,
  clearCart,
}: IProps) => {
  const styles = useStyles();

  const [email, setEmail] = useState(currentUser?.email || '');
  const [name, setName] = useState(currentUser?.displayName || '');
  const [cpf, setCPF] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setEmail(event.target.value),
    [],
  );

  const onChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value),
    [],
  );

  const onChangeCPF = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setCPF(event.target.value),
    [],
  );

  const onChangeCountry = useCallback(
    (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) =>
      setSelectedCountry(event?.target.value as string),
    [],
  );

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    try {
      const data = {
        clientId: currentUser.uid,
        amount: totalCart,
        customer: {
          name,
          country: selectedCountry.toLowerCase(),
          cpf,
          email,
        },
        items: productsCart,
      };
      payWithBankSlip(data).then(() => {
        clearCart();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className={styles.container}>
      <Typography className={styles.importantInformations}>
        IMPORTANT: CPF is a brazilian document required by the Pagarme Api. Do
        not put a real CPF number here. You can type any number of 11 digits.
      </Typography>
      <form onSubmit={onSubmitForm} className={styles.formContainer}>
        <PaymentInput
          value={name}
          onChange={onChangeName}
          title="Name"
          required
          name="name"
          placeholder="Name..."
        />
        <PaymentInput
          value={email}
          onChange={onChangeEmail}
          title="E-mail"
          required
          name="email"
          placeholder="E-mail..."
        />
        <PaymentInput
          value={cpf}
          onChange={onChangeCPF}
          title="CPF"
          required
          name="cpf"
          inputComponent={CPFInputMask}
          placeholder="CPF"
        />
        <SelectCountry value={selectedCountry} onChange={onChangeCountry} />
        <Button type="submit" className={styles.orderBt} variant="outlined">
          Order Now
        </Button>
      </form>
    </Box>
  );
};

export default WithPaymentForm(BankSlipPaymentForm);
