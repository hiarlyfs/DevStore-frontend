import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Menu from './components/Menu';
import { checkUserSession } from './redux/user/user.actions';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Checkout = lazy(() => import('./pages/Checkout'));
const UserOrders = lazy(() => import('./pages/UserOrders'));

interface IMapDispatchToProps {
  checkUser: () => void;
}

const Routes: React.FC<IMapDispatchToProps> = ({
  checkUser,
}: IMapDispatchToProps) => {
  useEffect(() => checkUser(), [checkUser]);
  return (
    <Suspense fallback={<div>oi</div>}>
      <BrowserRouter>
        <Route path="/" component={Menu} />
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/user/orders" exact component={UserOrders} />
      </BrowserRouter>
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  checkUser: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(Routes);
