import React from 'react';

import { User } from 'firebase';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import Box from '@material-ui/core/Box';
import MaskedInput from 'react-text-mask';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import WithPaymentForm from '../WithPaymentForm';
import PaymetInput from '../PaymentInput';

import useStyles from './styles';
import { IProductCart } from '../../redux/cart/cart.interfaces';

const NumberCardMask: React.FC<InputBaseComponentProps> = (
  props: InputBaseComponentProps,
) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
      ref={inputRef}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
    />
  );
};

const ExpiryMask: React.FC<InputBaseComponentProps> = (
  props: InputBaseComponentProps,
) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, '/', /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
};

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

  const InstallmentsComponent: React.FC<InputBaseComponentProps> = (
    props: InputBaseComponentProps,
  ) => {
    return (
      <Select
        style={{ height: 40 }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        fullWidth
        required
        variant="outlined"
      >
        {Array.from(Array(5).keys()).map((i) => (
          <MenuItem value={i + 1}>
            {i + 1} x de R$ {(totalCart / (100 * (i + 1))).toFixed(2)}
          </MenuItem>
        ))}
      </Select>
    );
  };

  return (
    <Box className={styles.container}>
      <Cards
        cvc={123}
        expiry="1112"
        focused="name"
        name="Hiarly Fernandes"
        number={4901490149014901}
      />
      <form className={styles.formContainer}>
        <PaymetInput
          title="Card Number"
          required
          name="number"
          placeholder="ex: 0000 0000 0000 0000"
          inputComponent={NumberCardMask}
        />
        <PaymetInput
          title="Card Holder Name"
          required
          name="name"
          placeholder="ex: HIARLY F SOUTO"
        />
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          flexDirection="row"
        >
          <PaymetInput
            title="Card Expiry"
            required
            name="expiry"
            placeholder="ex: 11/20"
            inputWidth={160}
            inputComponent={ExpiryMask}
          />
          <PaymetInput
            title="CVV"
            required
            name="cvv"
            placeholder="ex: 123"
            inputWidth={100}
          />
        </Box>
        <PaymetInput
          title="Installments"
          required={false}
          name="installments"
          placeholder="ex: 1"
          inputComponent={InstallmentsComponent}
        />
        <Button type="submit" className={styles.orderBt} variant="outlined">
          Order Now
        </Button>
      </form>
    </Box>
  );
};

export default WithPaymentForm(CardPaymentForm);