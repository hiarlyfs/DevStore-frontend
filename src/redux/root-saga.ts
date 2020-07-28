import { all, call, AllEffect } from 'redux-saga/effects';

export default function* rootSaga(): Generator<AllEffect<void>> {
  yield all([]);
}
