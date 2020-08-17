import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

interface IProps {
  totalCart: number;
  qtdInstallments: number;
  value: number;
  onChange: (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
  ) => void;
}

const SelectInstallments: React.FC<IProps> = ({
  totalCart,
  qtdInstallments,
  value,
  onChange,
}: IProps) => {
  return (
    <Box marginTop="10px" display="flex" flexDirection="column">
      <Typography>Installments</Typography>
      <Select
        value={value}
        onChange={onChange}
        style={{ height: 40, marginTop: 6 }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        fullWidth
        required
        variant="outlined"
      >
        {Array.from(Array(qtdInstallments).keys()).map((i) => (
          <MenuItem value={i + 1}>
            {i + 1} x de R$ {(totalCart / (i + 1)).toFixed(2)}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectInstallments;
