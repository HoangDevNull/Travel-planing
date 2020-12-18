import React from 'react';
import withLoading from 'components/common/HOC/withLoading';

import HeadSessions from './HeadSessions';
import SecondElement from './elements/SecondElement';
import ThirdElement from './elements/ThirdElement';

const Home = () => {
  return (
    <>
      <HeadSessions />
      <SecondElement />
      <ThirdElement />
    </>
  );
};

// export default withLoading(Home);
export default Home;
