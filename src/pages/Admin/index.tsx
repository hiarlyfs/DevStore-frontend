import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AddProductForm from '../../components/AddProductForm';

import useStyles from './styles';

const Admin: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.addProductTitle}>
        Add New Product
      </Typography>
      <AddProductForm />
    </Box>
  );
};

export default Admin;
