import React from 'react';

import { Box, Typography, makeStyles, Container ,FormControl} from '@material-ui/core';

import HeadSessions from './HeadSessions';
import FirstElement from './elements/FirstElement';
import SecondElement from './elements/SecondElement';

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
          <Box >
            <FirstElement />
          </Box>
          <SecondElement/>
        </Container>
      </Box>
    </>
  );
};

export default TopStories;
