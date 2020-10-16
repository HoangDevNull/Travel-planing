import React, { useState } from 'react';
import { Switch, Box, Container } from '@material-ui/core';
import { theme } from 'redux/theme/actions';
import { useSelector, useDispatch } from 'react-redux';

import Layout from 'components/Layout';

const Home = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const toggleTheme = (e) => {
    dispatch(theme.loadTheme(e.target.checked));
  };
  return (
    <Layout>
      <div style={{ minHeight: '100vh' }}>
        <Switch checked={isDark} onChange={toggleTheme} />
        <Container>
          <Box my={2}>
            {[...new Array(100)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join('\n')}
          </Box>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
