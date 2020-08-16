import React from 'react';

import { InputBaseComponentProps } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import useStyles from './styles';

interface IProps {
  title: string;
  required: boolean;
  name: string;
  placeholder: string;
  inputComponent?: React.ComponentType<InputBaseComponentProps>;
  inputWidth?: number;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentInput: React.FC<IProps> = ({
  title,
  required,
  name,
  placeholder,
  inputComponent,
  inputWidth,
  value,
  onChange,
}: IProps) => {
  const styles = useStyles({ inputWidth });

  return (
    <Box className={styles.container}>
      <Typography>{title}</Typography>
      <OutlinedInput
        required={required}
        name={name}
        placeholder={placeholder}
        className={styles.inputField}
        inputComponent={inputComponent}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default React.memo(PaymentInput);
