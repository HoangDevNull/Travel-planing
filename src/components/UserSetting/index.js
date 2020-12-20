import React from 'react';

import {
  Box,
  Typography,
  makeStyles,
  Container,
  Grid
} from '@material-ui/core';

import HeadSessions from './HeadSessions';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const useStyles = makeStyles((theme) => ({
  root: {},
  head_image_wrapper: {
    position: 'absolute',
    top: 0,
    left: 0
  }
}));

const Setting = () => {
  const classes = useStyles();

  const [index, setIndex] = React.useState(0);

  const handleSelect = (index) => {
    setIndex(index);
  };

  return (
    <>
      <HeadSessions />
      <Box my="80px">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={3}>
              <LeftSide onSelect={handleSelect} index={index} />
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <RightSide index={index} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Setting;
