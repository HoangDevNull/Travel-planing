import React from 'react';
import withLoading from 'components/common/HOC/withLoading';

import { Hidden } from '@material-ui/core';

import HeadSessions from './HeadSessions';
import SecondElement from './elements/SecondElement';
import ThirdElement from './elements/ThirdElement';
import FourthElement from './elements/FourthElement';
import FifthElement from './elements/FifthElement';

const Home = () => {
  return (
    <>
      <HeadSessions />
      <SecondElement />
      <ThirdElement />
      <FourthElement />
      <Hidden smDown>
        <FifthElement />
      </Hidden>
    </>
  );
};

export default withLoading(Home);
