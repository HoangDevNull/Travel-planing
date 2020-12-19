import React from 'react';

import { Box, Container, Grid } from '@material-ui/core';

import HeadSessions from './HeadSessions';
import Profile from './Profile';
import Dashboard from './Dashboard';

const TopStories = () => {
  return (
    <>
      <HeadSessions />
      <Box my="50px">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              <Profile />
            </Grid>
            <Grid item xs={12} md={3}>
              <Dashboard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TopStories;
