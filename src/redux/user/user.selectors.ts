import { createSelector } from 'reselect';
import { IReducer } from '../root-reducer.interface';
import { IUserState } from './user.interfaces';

const selectUserReducer = (state: IReducer): IUserState => state.user;

export const selectUser = createSelector(
  [selectUserReducer],
  (user) => user.user,
);

export const selectErrorLogin = createSelector(
  [selectUserReducer],
  (user) => user.failureLogin,
);

export const selectErrorRegister = createSelector(
  [selectUserReducer],
  (user) => user.failureRegister,
);

export const selectIsLogin = createSelector(
  [selectUserReducer],
  (user) => user.isLoging,
);

export const selectUserId = createSelector([selectUser], (user) => user?.uid);
