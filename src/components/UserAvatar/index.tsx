import React from 'react';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { User } from 'firebase';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { GrLogout, GrLogin } from 'react-icons/gr';
import { FaUserAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { logoutStart } from '../../redux/user/user.actions';

import WithUser from '../WithUser';

import useStyles from './styles';

interface IMapDispatchToProps {
  logout: () => void;
}

interface IProps extends IMapDispatchToProps {
  currentUser: User | null;
  logout: () => void;
}

const UserAvatar: React.FC<IProps> = ({ currentUser, logout }: IProps) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      {currentUser ? (
        <Avatar className={styles.avatar} src={currentUser?.photoURL as string}>
          {currentUser?.displayName?.charAt(0) || <FaUserAlt />}
        </Avatar>
      ) : (
        <Link to="/login">
          <Avatar className={styles.avatar}>
            <GrLogin />
          </Avatar>
        </Link>
      )}
      <Box id="avatar_informations" className={styles.avatarHoverContainer}>
        <ArrowDropUpIcon className={styles.arrowUp} />
        {currentUser ? (
          <>
            <Link className={styles.orders} to="/user/orders">
              My orders
            </Link>
            <Box onClick={() => logout()} className={styles.logoutContainer}>
              <GrLogout className={styles.logoutIcon} />
              <Typography className={styles.logout}>Logout</Typography>
            </Box>
          </>
        ) : (
          <Link to="/login">
            <Button className={styles.loginButton}>Login</Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  logout: () => dispatch(logoutStart()),
});

export default WithUser(connect(null, mapDispatchToProps)(UserAvatar));
