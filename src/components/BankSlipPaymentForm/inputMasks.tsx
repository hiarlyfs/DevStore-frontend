import React from 'react';
import MaskedInput from 'react-text-mask';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';

export const CPFInputMask: React.FC<InputBaseComponentProps> = (
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
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
    />
  );
};
