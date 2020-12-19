import React from 'react';

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import HeadImage from 'components/common/HeadImage';
import ScrollDownIcon from 'components/common/ScrollDownIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  head_image_wrapper: {
    position: 'relative',
    display: 'block',
    boxSizing: 'borderBox',
    overflow: 'hidden',
    marginTop: -64,
    [theme.breakpoints.down('xs')]: {
      marginTop: -56
    }
  }
}));

const HeadSessions = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.head_image_wrapper}>
        <HeadImage src="https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </Box>
      <Container className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h1" color="secondary">
              Feature video detail
            </Typography>
          </Grid>
        </Grid>

        <ScrollDownIcon />
      </Container>
    </>
  );
};

export default HeadSessions;
