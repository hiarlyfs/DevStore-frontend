import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWhitelistFilter } from 'redux-persist-transform-filter';

import productsReducer from './products/products.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    createWhitelistFilter('user', ['user']),
    createWhitelistFilter('cart'),
  ],
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
