import { User } from 'firebase';
import UserTypes from './user.types';
import { IUserState, IUserAction } from './user.interfaces';

const INITIAL_STATE: IUserState = {
  user: null,
  isLoging: false,
  failureRegister: null,
  failureLogin: null,
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
        failureLogin: null,
        failureRegister: null,
        isLoging: false,
      };
    case UserTypes.EMAIL_SIGN_IN_START:
    case UserTypes.GOOGLE_SIGN_IN_START:
    case UserTypes.REGISTER_START:
      return {
        ...state,
        isLoging: true,
      };
    case UserTypes.EMAIL_SIGN_IN_FAILURE:
    case UserTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        isLoging: false,
        failureLogin: action.payload as Error,
        failureRegister: null,
      };
    case UserTypes.REGISTER_FAILURE:
      return {
        ...state,
        isLoging: false,
        failureLogin: null,
        failureRegister: action.payload as Error,
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
