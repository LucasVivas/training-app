import React, { lazy, Suspense } from 'react';

const LazyViewHome = lazy(() => import('./ViewHome'));

function ViewHome(props) {
  return (
    <Suspense fallback={null}>
      <LazyViewHome {...props} />
    </Suspense>
  );
}

export default ViewHome;
