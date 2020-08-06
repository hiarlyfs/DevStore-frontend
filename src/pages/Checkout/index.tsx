import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { User } from 'firebase';

import { createStructuredSelector } from 'reselect';
import { IReducer } from '../../redux/root-reducer.interface';
import { selectUser } from '../../redux/user/user.selectors';

import useStyles from './styles';

interface IMapStateToProps {
  user: User | null;
}

const Checkout: React.FC<IMapStateToProps> = ({ user }: IMapStateToProps) => {
  const history = useHistory();

  useEffect(() => {
    if (!user)
      history.push({
        pathname: '/login',
        state: { afterLoginRedirectTo: '/checkout' },
      });
  }, [user, history]);

  const styles = useStyles();

  return <div>oi</div>;
};

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  user: selectUser,
});

export default connect(mapStateToProps)(Checkout);
