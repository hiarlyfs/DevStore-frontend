import { User } from 'firebase';

export interface IUserState {
  user: User | null;
  isLoging: boolean;
  failure: Error | null;
}

export interface IUserAction {
  type: string;
  payload?: User | { email: string; password: string } | Error;
}
