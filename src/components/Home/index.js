import React from 'react';
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
        <div className="head">
          <img
            src="https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="dev"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              // backgroundPosition: 'center',
              backgroundSize: 'auto 1038px',
              backgroundRepeat: 'repeat-x',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
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
