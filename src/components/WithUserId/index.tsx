/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectUserId } from '../../redux/user/user.selectors';
import { IReducer } from '../../redux/root-reducer.interface';

interface IMapStateToProps {
  userId: string | undefined;
}

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  userId: selectUserId,
});

const WithUserId = (WrappedComponent: React.ComponentType<any>): React.FC => {
  const UserIdProvider: React.FC<IMapStateToProps> = ({
    userId,
    ...props
  }: IMapStateToProps) => {
    return <WrappedComponent {...props} userId={userId} />;
  };

  return connect(mapStateToProps)(UserIdProvider);
};

export default WithUserId;
