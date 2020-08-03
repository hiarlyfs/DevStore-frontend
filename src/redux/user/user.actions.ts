import { User } from 'firebase';
import UserTypes from './user.types';
import { IUserAction } from './user.interfaces';

export const signIn = (user: User): IUserAction => ({
  type: UserTypes.SIGN_IN,
  payload: user,
});

export const signOut = (): IUserAction => ({
  type: UserTypes.SIGN_OUT,
});
