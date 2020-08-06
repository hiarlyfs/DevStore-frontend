import { User } from 'firebase';
import UserTypes from './user.types';
import {
  IUserAction,
  INewUserData,
  IUserLoginCredential,
} from './user.interfaces';

export const signInSuccess = (user: User): IUserAction => ({
  type: UserTypes.SET_USER,
  payload: user,
});

export const googleSignInStart = (successCb?: () => void): IUserAction => ({
  type: UserTypes.GOOGLE_SIGN_IN_START,
  successCb,
});

export const googleSignInFailure = (failure: Error): IUserAction => ({
  type: UserTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: failure,
});

export const emailSignInStart = (
  emailAndPassword: IUserLoginCredential,
  successCb?: () => void,
): IUserAction => ({
  type: UserTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
  successCb,
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

export const registerStart = (
  newUserData: INewUserData,
  successCb?: () => void,
): IUserAction => ({
  type: UserTypes.REGISTER_START,
  payload: newUserData,
  successCb,
});

export const registerFailure = (failure: Error): IUserAction => ({
  type: UserTypes.REGISTER_FAILURE,
  payload: failure,
});

export const checkUserSession = (): IUserAction => ({
  type: UserTypes.CHECK_USER_SESSION,
});
