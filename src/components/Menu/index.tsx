import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import Cart from '../Cart';
import UserAvatar from '../UserAvatar';

import useStyles from './styles';

const Menu: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>DevStore</Typography>

      <Box id="menu" className={styles.containerMenuOption}>
        <Link className={styles.link} to="/admin">
          <Typography className={styles.adminOption}>Admin</Typography>
        </Link>
        <Link className={styles.link} to="/">
          <Typography className={styles.menuOption}>Home</Typography>
        </Link>
        <Link className={styles.link} to="/shop">
          <Typography className={styles.menuOption}>Shop</Typography>
        </Link>
        <Link className={styles.link} to="/shop?category=frameworks">
          <Typography className={styles.menuOption}>Frameworks</Typography>
        </Link>
        <Link className={styles.link} to="/shop?category=languages">
          <Typography className={styles.menuOption}>Languages</Typography>
        </Link>
        <Link className={styles.link} to="/shop?category=tools">
          <Typography className={styles.menuOption}>Tools</Typography>
        </Link>
        <Box className={styles.cardContainer}>
          <Cart />
          <UserAvatar />
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
