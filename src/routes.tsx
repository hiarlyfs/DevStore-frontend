import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import Menu from './components/Menu';
import { checkUserSession } from './redux/user/user.actions';

const Admin = lazy(() => import('./pages/Admin'));
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Checkout = lazy(() => import('./pages/Checkout'));
const UserOrders = lazy(() => import('./pages/UserOrders'));
const OrderDetails = lazy(() => import('./pages/OrderDetails'));

interface IMapDispatchToProps {
  checkUser: () => void;
}

const Routes: React.FC<IMapDispatchToProps> = ({
  checkUser,
}: IMapDispatchToProps) => {
  useEffect(() => {
    checkUser();
  }, [checkUser]);
  return (
    <Suspense fallback={<CircularProgress />}>
      <BrowserRouter>
        <Route path="/" component={Menu} />
        <Route path="/admin" component={Admin} />
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/user/orders" exact component={UserOrders} />
        <Route path="/user/orders/:orderId" exact component={OrderDetails} />
      </BrowserRouter>
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  checkUser: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(Routes);
