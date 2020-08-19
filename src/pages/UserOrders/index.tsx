import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import RequiredUser from '../../components/RequiredUser';
import UserOrder from '../../components/UserOrder';

import useStyles from './styles';

const UserOrders: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Box>
        <Typography className={styles.title}>My orders</Typography>
        <Box className={styles.ordersContainer}>
          <Box marginTop="20px">
            <UserOrder
              amount={123}
              orderData="2020-20-02"
              orderNumber={13131}
              status="paid"
            />
          </Box>

          <Box marginTop="20px">
            <UserOrder
              amount={123}
              orderData="2020-20-02"
              orderNumber={13131}
              status="paid"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequiredUser(UserOrders, '/user/orders');
