import React from 'react';

import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';

import { Dispatch } from 'redux';
import { getOrderStart } from '../../redux/orders/order.actions';

import useStyles from './styles';

interface IMapDispatchToProps {
  getOrder: (orderId: string) => void;
}

interface IParams {
  orderId?: string;
}

type IProps = IMapDispatchToProps;

const OrderDetails: React.FC<IProps> = ({ getOrder }: IProps) => {
  const styles = useStyles();

  const params = useParams<IParams>();

  if (params.orderId) getOrder(params.orderId);

  return <div>oi</div>;
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  getOrder: (orderId) => dispatch(getOrderStart(orderId)),
});

export default connect(null, mapDispatchToProps)(OrderDetails);
