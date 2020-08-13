import React from 'react';

import { connect } from 'react-redux';

import { User } from 'firebase';

import { createStructuredSelector } from 'reselect';
import { IReducer } from '../../redux/root-reducer.interface';
import { selectUser } from '../../redux/user/user.selectors';

interface IMapStateToProps {
  user: User | null;
}

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  user: selectUser,
});

const WithUser = (WrappedComponent: React.ComponentType<any>): React.FC => {
  const UserProvider: React.FC<IMapStateToProps> = ({
    user,
    ...props
  }: IMapStateToProps) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} currentUser={user} />;
  };
  return connect(mapStateToProps)(UserProvider);
};

export default WithUser;
