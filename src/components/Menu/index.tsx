import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import logo from '../../asssets/logo.png';

import useStyles from './styles';

const Menu: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <img className={styles.logoLoja} src={logo} alt="Logo loja" />
      <Box className={styles.containerMenuOption}>
        <Link className={styles.link} to="/">
          <Typography className={styles.menuOption}>Home</Typography>
        </Link>
        <Link className={styles.link} to="/shop">
          <Typography className={styles.menuOption}>Shop</Typography>
        </Link>
        <Link className={styles.link} to="/shop?category=framework">
          <Typography className={styles.menuOption}>Frameworks</Typography>
        </Link>
        <Link className={styles.link} to="/shop?category=linguagens">
          <Typography className={styles.menuOption}>Linguagens</Typography>
        </Link>
        <Link className={styles.link} to="/shop?category=ferramentas">
          <Typography className={styles.menuOption}>Ferramentas</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Menu;
