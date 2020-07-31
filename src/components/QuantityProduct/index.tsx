import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import {
  addUnitProduct,
  decreaseUnitProduct,
} from '../../redux/cart/cart.actions';

import useStyles from './styles';

interface IMapDispatchToProps {
  increaseUnit: (idProduct: number) => void;
  decreaseUnit: (idProduct: number) => void;
}

interface IProps {
  quantity: number;
  id: number;
  increaseUnit: (idProduct: number) => void;
  decreaseUnit: (idProduct: number) => void;
}

const QuantityProduct: React.FC<IProps> = ({
  quantity,
  id,
  increaseUnit,
  decreaseUnit,
}: IProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <ArrowBackIosIcon
        onClick={() => decreaseUnit(id)}
        className={styles.arrow}
      />
      <Typography className={styles.quantity}>{quantity}</Typography>
      <ArrowForwardIosIcon
        onClick={() => increaseUnit(id)}
        className={styles.arrow}
      />
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  increaseUnit: (idProduct: number) => dispatch(addUnitProduct(idProduct)),
  decreaseUnit: (idProduct: number) => dispatch(decreaseUnitProduct(idProduct)),
});

export default connect(null, mapDispatchToProps)(QuantityProduct);
