import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './components/Menu';

// const Home = lazy(() => import('./pages/Home'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<div>oi</div>}>
      <BrowserRouter>
        <Route path="/" component={Menu} />
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
