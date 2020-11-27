import React from 'react';
import withLoading from 'components/common/HOC/withLoading';

import HeadSessions from './components/HeadSessions';

const Home = () => {
  return (
    <>
      <HeadSessions />
    </>
  );
};

export default withLoading(Home);
