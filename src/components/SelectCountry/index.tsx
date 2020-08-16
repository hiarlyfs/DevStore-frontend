import React, { useState, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './styles';

interface ICountry {
  name: string;
  alpha2Code: string;
  flag: string;
}

interface IProps {
  value: string;
  onChange: (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
  ) => void;
}

const SelectCountry: React.FC<IProps> = ({ value, onChange }: IProps) => {
  const styles = useStyles();
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <Box>
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
        value={value}
        variant="outlined"
        onChange={onChange}
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
    </Box>
  );
};

export default React.memo(SelectCountry);
