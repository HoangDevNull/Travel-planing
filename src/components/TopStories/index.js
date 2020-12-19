import React from 'react';

import { Box, Typography, makeStyles, Container } from '@material-ui/core';

import HeadSessions from './HeadSessions';

const useStyles = makeStyles((theme) => ({
  root: {},
  head_image_wrapper: {
    position: 'absolute',
    top: 0,
    left: 0
  }
}));

const TopStories = () => {
  const classes = useStyles();
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

export default TopStories;
