import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './components/Menu';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const Cart = lazy(() => import('./pages/Cart'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<div>oi</div>}>
      <BrowserRouter>
        <Route path="/" component={Menu} />
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/cart" exact component={Cart} />
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
