import React, { useState } from 'react';

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import { videos } from '../data';
import VideoPlayer from 'components/common/VideoPlayer';
import VideoCard from '../components/VideoCard';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,
    width: '100%',
    background: '#272A33'
  },
  title: {
    fontWeight: 'bold'
  }
}));

const FourthElement = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(0);

  const handleSelectVideo = (index) => {
    setChecked(index);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box mb="15px">
            <Typography variant="h5" className={classes.title}>
              Feature video
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <VideoPlayer {...videos[checked]} />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="space-between"
          xs={12}
          md={5}
        >
          {videos.map((item, index) => (
            <Box key={item.id} onClick={() => handleSelectVideo(index)}>
              <VideoCard {...item} active={checked === index} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default FourthElement;
