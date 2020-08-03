import { User } from 'firebase';

export interface IUserState {
  user: User | null;
}

export interface IUserAction {
  type: string;
  payload?: User;
}
