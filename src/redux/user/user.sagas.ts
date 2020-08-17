import {
  all,
  call,
  put,
  takeLatest,
  AllEffect,
  CallEffect,
  ForkEffect,
  PutEffect,
} from 'redux-saga/effects';
import { User } from 'firebase';
import { googleProvider } from '../../services/firebase/firebaseUtils';
import { firebaseAuth } from '../../services/firebase/firebaseConfig';
import UserTypes from './user.types';
import {
  googleSignInFailure,
  emailSignInFailure,
  logoutSuccess,
  registerFailure,
  signInSuccess,
} from './user.actions';
import {
  IUserLoginCredential,
  INewUserData,
  IUserAction,
} from './user.interfaces';

function* dispacthSignInSuccess(
  user: User,
  cb?: () => void,
): Generator<PutEffect<IUserAction>> {
  yield put(signInSuccess(user));
  if (cb) cb();
}

function* googleLoginStart({
  successCb,
}: {
  type: typeof UserTypes.GOOGLE_SIGN_IN_START;
  successCb?: () => void;
}): Generator<any, any, any> {
  try {
    const { user } = yield firebaseAuth.signInWithPopup(googleProvider);
    yield dispacthSignInSuccess(user, successCb);
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

function* signInWithGoogle(): Generator<ForkEffect<void>> {
  yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, googleLoginStart);
}

function* emailLoginStart({
  payload: { email, password },
  successCb,
}: {
  type: typeof UserTypes.EMAIL_SIGN_IN_START;
  payload: IUserLoginCredential;
  successCb?: () => void;
}): Generator<any, any, any> {
  try {
    const { user } = yield firebaseAuth.signInWithEmailAndPassword(
      email,
      password,
    );
    yield dispacthSignInSuccess(user, successCb);
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

function* signInWithEmail(): Generator<ForkEffect<void>> {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, emailLoginStart);
}

function passwordMatch(
  password: string,
  confirmPassword: string,
): Error | void {
  if (confirmPassword !== password) {
    throw new Error('Password do not match');
  }
}

function* newUserRegister({
  payload: { email, password, confirmPassword, name },
  successCb,
}: {
  type: typeof UserTypes.REGISTER_START;
  payload: INewUserData;
  successCb?: () => void;
}): Generator<any, any, any> {
  try {
    passwordMatch(password, confirmPassword);
    const { user } = yield firebaseAuth.createUserWithEmailAndPassword(
      email,
      password,
    );
    yield user.updateProfile({ displayName: name });
    yield dispacthSignInSuccess(user, successCb);
  } catch (error) {
    yield put(registerFailure(error));
  }
}

function* registerWithEmail(): Generator<ForkEffect<void>> {
  yield takeLatest(UserTypes.REGISTER_START, newUserRegister);
}

function* logoutFirebase(): Generator<any, any, any> {
  try {
    yield firebaseAuth.signOut();
    yield put(logoutSuccess());
  } catch (error) {
    console.log(error);
  }
}

function* logout(): Generator<ForkEffect<void>> {
  yield takeLatest(UserTypes.LOGOUT_START, logoutFirebase);
}

export function* userSagas(): Generator<AllEffect<CallEffect>> {
  yield all([
    call(signInWithGoogle),
    call(signInWithEmail),
    call(registerWithEmail),
    call(logout),
  ]);
}
