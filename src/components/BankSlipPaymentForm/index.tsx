/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import PaymentInput from '../PaymentInput';
import SelectCountry from '../SelectCountry';

import { CPFInputMask } from './inputMasks';

import useStyles from './styles';
import WithPaymentForm from '../WithPaymentForm';
import { IWithPaymentFormProps } from '../interfaces/WithPaymentForm.interfaces';

type IProps = IWithPaymentFormProps;

const BankSlipPaymentForm: React.FC<IProps> = ({ currentUser }: IProps) => {
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

  return (
    <Box className={styles.container}>
      <form className={styles.formContainer}>
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
