import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';

import PaymentInput from '../PaymentInput';

import useStyles from './styles';

interface ICountry {
  name: string;
  alpha2Code: string;
  flag: string;
}

interface ISelectCountryProps extends InputBaseComponentProps {
  countries: ICountry[];
}

const BankSlipPaymentForm: React.FC = () => {
  const styles = useStyles();
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <Box className={styles.container}>
      <form className={styles.formContainer}>
        <PaymentInput title="Name" required name="name" placeholder="Name..." />
        <PaymentInput
          title="E-mail"
          required
          name="email"
          placeholder="E-mail..."
        />
        <PaymentInput title="CPF" required name="cpf" placeholder="CPF" />
        <Typography className={styles.selectCountry}>Your Country</Typography>
        <Select
          style={{
            height: 40,
          }}
          SelectDisplayProps={{
            style: {
              display: 'flex',
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
          required
          variant="outlined"
        >
          {countries.map((country) => (
            <MenuItem
              style={{ display: 'flex', flexDirection: 'row' }}
              value={country.alpha2Code}
            >
              <img
                style={{
                  maxWidth: 30,
                  maxHeight: 30,
                  width: 'auto',
                  height: 'auto',
                  marginRight: 5,
                }}
                src={country.flag}
                alt="Country Flag"
              />
              <Typography>{country.name}</Typography>
            </MenuItem>
          ))}
        </Select>
        <Button type="submit" className={styles.orderBt} variant="outlined">
          Order Now
        </Button>
      </form>
    </Box>
  );
};

export default BankSlipPaymentForm;
