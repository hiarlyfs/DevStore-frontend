import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './components/Menu';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<div>oi</div>}>
      <BrowserRouter>
        <Route path="/" component={Menu} />
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
