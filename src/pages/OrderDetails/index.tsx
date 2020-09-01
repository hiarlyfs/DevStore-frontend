/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';

import { Dispatch } from 'redux';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getOrderStart } from '../../redux/orders/order.actions';
import {
  selectSelectedOrder,
  selectIsFetchingOrders,
  selectErrorOrders,
} from '../../redux/orders/order.selectors';

import useStyles from './styles';

import { IReducer } from '../../redux/root-reducer.interface';
import { OrderDetails } from '../../types/Order';

interface IMapDispatchToProps {
  getOrder: (orderId: string) => void;
}

interface IMapStateToProps {
  order: OrderDetails | null;
  fetching: boolean;
  error: Error | null;
}

interface IParams {
  orderId?: string;
}

interface IProps extends IMapDispatchToProps, IMapStateToProps {}

const OrderInformations: React.FC<IProps> = ({
  getOrder,
  order,
  fetching,
  error,
}: IProps) => {
  const styles = useStyles();

  const params = useParams<IParams>();

  useEffect(() => {
    if (params.orderId) getOrder(params.orderId);
  }, [params, getOrder]);

  return (
    <Box className={styles.container}>
      {fetching && <CircularProgress />}
      {!fetching && !error && order && (
        <>
          <Box className={styles.headerInformations}>
            <Box className={styles.informationLine}>
              <Typography className={styles.informationTitle}>
                Order data
              </Typography>
              <Typography className={styles.informationValue}>
                {order.date_created}
              </Typography>
            </Box>
            <Box className={styles.informationLine}>
              <Typography className={styles.informationTitle}>Total</Typography>
              <Typography className={styles.informationValue}>
                R${(order.amount / 100).toFixed(2)}
              </Typography>
            </Box>
            {order.payment_method === 'credit_card' && (
              <Box className={styles.informationLine}>
                <Typography className={styles.informationTitle}>
                  Credit Card
                </Typography>
                <Typography className={styles.informationValue}>
                  {`**** **** **** ${order.card_last_digits}`}
                </Typography>
              </Box>
            )}
            <Box className={styles.informationLine}>
              <Typography className={styles.informationTitle}>
                Installments
              </Typography>
              <Typography className={styles.informationValue}>
                {order.installments}
              </Typography>
            </Box>
            <Box className={styles.informationLine}>
              <Typography className={styles.informationTitle}>
                Status
              </Typography>
              <Box display="flex" alignItems="center" flexDirection="row">
                <Typography className={styles.informationValue}>
                  {order.status}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.itemsContainer}>
            {order.items.map((item) => (
              <Box className={styles.itemContainer}>
                <img className={styles.imgItem} src={item.image} alt="Item" />
                <Box className={styles.itemDescriptionContainer}>
                  <Typography className={styles.itemName}>
                    {item.title} - {item.category}
                  </Typography>
                  <Typography className={styles.itemQuantiy}>
                    {item.quantity} x R${(item.unit_price / 100).toFixed(2)}
                  </Typography>
                  <Typography className={styles.itemTotal}>
                    Total: $
                    {((item.quantity * item.unit_price) / 100).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  order: selectSelectedOrder,
  fetching: selectIsFetchingOrders,
  error: selectErrorOrders,
});

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  getOrder: (orderId) => dispatch(getOrderStart(orderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderInformations);
