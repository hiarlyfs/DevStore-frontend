import { User } from 'firebase';
import UserTypes from './user.types';
import { IUserState, IUserAction } from './user.interfaces';

const INITIAL_STATE: IUserState = {
  user: null,
  isLoging: false,
  failure: null,
};

const UserReducer = (
  state = INITIAL_STATE,
  action: IUserAction,
): IUserState => {
  switch (action.type) {
    case UserTypes.SET_USER:
      return {
        ...state,
        user: action.payload as User,
        failure: null,
      };
    case UserTypes.EMAIL_SIGN_IN_START:
    case UserTypes.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        isLoging: true,
        failure: null,
      };
    case UserTypes.EMAIL_SIGN_IN_FAILURE:
    case UserTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        failure: action.payload as Error,
      };
    case UserTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
