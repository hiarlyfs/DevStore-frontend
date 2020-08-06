import { User } from 'firebase';
import UserTypes from './user.types';
import { IUserAction } from './user.interfaces';

export const signInSuccess = (user: User): IUserAction => ({
  type: UserTypes.SET_USER,
  payload: user,
});

export const googleSignInStart = (): IUserAction => ({
  type: UserTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInFailure = (failure: Error): IUserAction => ({
  type: UserTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: failure,
});

export const emailSignInStart = (emailAndPassword: {
  email: string;
  password: string;
}): IUserAction => ({
  type: UserTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInFailure = (failure: Error): IUserAction => ({
  type: UserTypes.EMAIL_SIGN_IN_FAILURE,
  payload: failure,
});

export const logoutStart = (): IUserAction => ({
  type: UserTypes.LOGOUT_START,
});

export const logoutSuccess = (): IUserAction => ({
  type: UserTypes.LOGOUT_SUCCESS,
});

export const registerStart = (newUserData: {
  email: string;
  password: string;
  name: string;
}): IUserAction => ({
  type: UserTypes.REGISTER_START,
  payload: newUserData,
});

export const registerFailure = (failure: Error): IUserAction => ({
  type: UserTypes.REGISTER_FAILURE,
  payload: failure,
});

export const checkUserSession = (): IUserAction => ({
  type: UserTypes.CHECK_USER_SESSION,
});
