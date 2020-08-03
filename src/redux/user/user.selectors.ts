import { createSelector } from 'reselect';
import { IReducer } from '../root-reducer.interface';
import { IUserState } from './user.interfaces';

const selectUserReducer = (state: IReducer): IUserState => state.user;

export const selectUser = createSelector(
  [selectUserReducer],
  (user) => user.user,
);
