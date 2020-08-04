import {
  all,
  call,
  put,
  takeLatest,
  AllEffect,
  CallEffect,
  ForkEffect,
} from 'redux-saga/effects';
import { googleProvider } from '../../firebase/firebaseUtils';
import { firebaseAuth } from '../../firebase/firebaseConfig';
import UserTypes from './user.types';
import {
  googleSignInFailure,
  signInSuccess,
  emailSignInFailure,
} from './user.actions';

function* googleLoginStart(): Generator<any, any, any> {
  try {
    const { user } = yield firebaseAuth.signInWithPopup(googleProvider);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

function* signInWithGoogle(): Generator<ForkEffect<void>> {
  yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, googleLoginStart);
}

function* emailLoginStart({
  payload: { email, password },
}: {
  type: typeof UserTypes.EMAIL_SIGN_IN_START;
  payload: { email: string; password: string };
}): Generator<any, any, any> {
  try {
    const { user } = yield firebaseAuth.signInWithEmailAndPassword(
      email,
      password,
    );
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

function* signInWithEmail(): Generator<ForkEffect<void>> {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, emailLoginStart);
}

export function* userSagas(): Generator<AllEffect<CallEffect>> {
  yield all([call(signInWithGoogle), call(signInWithEmail)]);
}
