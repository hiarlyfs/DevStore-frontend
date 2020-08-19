import React from 'react';

import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

interface IProps {
  orderData: string;
  amount: number;
  status: string;
  orderNumber: number;
}

const UserOrder: React.FC<IProps> = ({
  orderData,
  amount,
  status,
  orderNumber,
}: IProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Box className={styles.squareContainer}>
        <Typography className={styles.squareTitle}>Order data</Typography>
        <Typography className={styles.squareDetails}>{orderData}</Typography>
      </Box>
      <Box className={styles.squareContainer}>
        <Typography className={styles.squareTitle}>Amount</Typography>
        <Typography className={styles.squareDetails}>
          R$ {amount.toFixed(2)}
        </Typography>
      </Box>
      <Box className={styles.squareContainer}>
        <Typography className={styles.squareTitle}>Status</Typography>
        <Typography className={styles.squareDetails}>{status}</Typography>
      </Box>
      <Box marginLeft="200px" className={styles.squareContainer}>
        <Typography className={styles.squareTitle}>Order Number</Typography>
        <Typography className={styles.squareDetails}>{orderNumber}</Typography>
      </Box>
      <Link to={`/user/orders/${orderNumber}`}>Order details</Link>
    </Box>
  );
};

export default UserOrder;
