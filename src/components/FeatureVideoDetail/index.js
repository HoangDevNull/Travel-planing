import React from 'react';

import { Box, Container, Typography } from '@material-ui/core';
import HeadSessions from './HeadSessions';

const FeatureVideoDetail = () => {
  return (
    <>
      <HeadSessions />
      <Box mb="50px">
        <Container>
          <Typography variant="h4">Content here</Typography>
        </Container>
      </Box>
    </>
  );
};

export default FeatureVideoDetail;
