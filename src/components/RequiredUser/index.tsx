import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { User } from 'firebase';
import WithUser from '../WithUser';

interface IUserComponent {
  currentUser: User;
}

const RequiredUser = (
  WrappedComponent: React.ComponentType<any>,
  afterLoginRedirectTo: string,
): React.FC => {
  const RedirectComponent: React.FC<IUserComponent> = ({
    currentUser,
    ...props
  }: IUserComponent) => {
    const history = useHistory();

    useEffect(() => {
      if (!currentUser)
        history.push({
          pathname: '/login',
          state: { afterLoginRedirectTo },
        });
    }, [currentUser, history]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  };

  return WithUser(RedirectComponent);
};

export default RequiredUser;
