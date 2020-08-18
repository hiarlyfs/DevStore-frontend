/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import PaymentInput from '../PaymentInput';
import SelectCountry from '../SelectCountry';

import { CPFInputMask } from './inputMasks';

import WithPaymentForm from '../WithPaymentForm';
import { IWithPaymentProvider } from '../interfaces/WithPaymentForm.interfaces';

import { startCheckoutWithBankSlip } from '../../redux/checkout/checkout.actions';

import useStyles from './styles';
import { IBankSlipOrderData } from '../../services/api/api.interfaces';

interface IMapDispatchToProps {
  checkout: (data: IBankSlipOrderData, successCb?: () => void) => void;
}

interface IProps extends IWithPaymentProvider, IMapDispatchToProps {}

const BankSlipPaymentForm: React.FC<IProps> = ({
  currentUser,
  totalCart,
  productsCart,
  checkout,
  orderError,
  ordering,
}: IProps) => {
  const styles = useStyles();
  const history = useHistory();

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

  const redirectAfterCheckout = (): void => history.push('/user/orders');

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
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
    checkout(data, redirectAfterCheckout);
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
  checkout: (data, successCb?) =>
    dispatch(startCheckoutWithBankSlip(data, successCb)),
});

export default WithPaymentForm(
  connect(null, mapDispatchToProps)(BankSlipPaymentForm),
);
