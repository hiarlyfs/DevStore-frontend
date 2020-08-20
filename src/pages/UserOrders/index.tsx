/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from 'redux';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Spinner from '../../components/Spinner';
import RequiredUser from '../../components/RequiredUser';
import UserOrder from '../../components/UserOrder';
import WithUserId from '../../components/WithUserId';

import { IReducer } from '../../redux/root-reducer.interface';
import {
  selectOrders,
  selectErrorOrders,
  selectIsFetchingOrders,
} from '../../redux/orders/order.selectors';
import { getOrdersStart } from '../../redux/orders/order.actions';
import { Order } from '../../types/Order';

import useStyles from './styles';

interface IMapDispatchToProps {
  fetchOrders: (userId: string) => void;
}

interface IMapStateToProps {
  orders: Order[];
  isFetching: boolean;
  error: Error | null;
}

interface IProps extends IMapStateToProps, IMapDispatchToProps {
  userId: string | undefined;
}

const UserOrders: React.FC<IProps> = ({
  userId,
  orders,
  isFetching,
  error,
  fetchOrders,
}: IProps) => {
  useEffect(() => {
    if (userId) fetchOrders(userId);
  }, [userId, fetchOrders]);

  const styles = useStyles();

  return (
    <Box className={styles.container}>
      {isFetching ? (
        <Spinner />
      ) : (
        <Box marginBottom="20px">
          <Typography className={styles.title}>My orders</Typography>
          <Box className={styles.ordersContainer}>
            {orders.map((order) => (
              <Box marginTop="20px">
                <UserOrder
                  amount={order.amount / 100}
                  orderData={order.data}
                  orderNumber={order.orderId}
                  status={order.status}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  error: selectErrorOrders,
  isFetching: selectIsFetchingOrders,
  orders: selectOrders,
});

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  fetchOrders: (clientId) => dispatch(getOrdersStart(clientId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithUserId(RequiredUser(UserOrders, '/user/orders')));
