import { User } from 'firebase';
import UserTypes from './user.types';
import { IUserState, IUserAction } from './user.interfaces';

const INITIAL_STATE: IUserState = {
  user: null,
};

const UserReducer = (
  state = INITIAL_STATE,
  action: IUserAction,
): IUserState => {
  switch (action.type) {
    case UserTypes.SIGN_IN:
      return {
        ...state,
        user: action.payload as User,
      };
    case UserTypes.SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
