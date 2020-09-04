import {
  takeLatest,
  put,
  call,
  all,
  ForkEffect,
  AllEffect,
  CallEffect,
} from 'redux-saga/effects';
import NewProductTypes from './newProduct.types';
import { INewProductAction, INewProduct } from './newProduct.interfaces';
import { addProductFailure, addProductSuccess } from './newProduct.actions';
import { createProduct } from '../../services/api/apiAdmin';
import { Product } from '../../types/Products';

function* addNewProductLogic({
  payload,
}: INewProductAction): Generator<any, any, any> {
  try {
    const product: Product = yield call(createProduct, payload as INewProduct);
    yield put(addProductSuccess(product));
  } catch (err) {
    yield put(addProductFailure(err));
  }
}

function* addNewProduct(): Generator<ForkEffect<void>> {
  yield takeLatest(NewProductTypes.ADD_NEW_PRODUCT_START, addNewProductLogic);
}

export function* newProductSagas(): Generator<AllEffect<CallEffect>> {
  yield all([call(addNewProduct)]);
}
