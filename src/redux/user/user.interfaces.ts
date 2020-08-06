import { User } from 'firebase';

export interface IUserState {
  user: User | null;
  isLoging: boolean;
  failureLogin: Error | null;
  failureRegister: Error | null;
}

export interface INewUserData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  successCb?: () => void;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserAction {
  type: string;
  payload?: User | INewUserData | IUserLogin | Error;
}
