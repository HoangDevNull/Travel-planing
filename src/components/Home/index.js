import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

import HeadImage from 'components/common/HeadImage';
import HeadSessions from './components/HeadSessions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '94vh'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <HeadImage
        src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="dev"
      />
      <Container className={classes.root}>
        <HeadSessions />
      </Container>
    </>
  );
};

export default Home;
