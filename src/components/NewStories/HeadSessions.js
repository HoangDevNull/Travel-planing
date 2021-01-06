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
  },
  font_bold: {
    fontWeight: 'bold'
  },
  text_overlay_wrapper: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    opacity: 0.3
  },
  text_overlay: {
    fontSize: '13vw',
    fontWeight: 'bolder',
    [theme.breakpoints.up('xl')]: {
      fontSize: '20em'
    }
  }
}));

const HeadSessions = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        className={classes.text_overlay_wrapper}
      >
        {'Create stories'.split('').map((str, i) => (
          <Typography
            className={classes.text_overlay}
            variant="h1"
            align="justify"
            color="secondary"
            key={i}
          >
            {str}
          </Typography>
        ))}
      </Box>
      <Box className={classes.head_image_wrapper}>
        <HeadImage src="https://images.pexels.com/photos/5088021/pexels-photo-5088021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </Box>
      <Container className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Typography
              variant="h1"
              color="secondary"
              className={classes.font_bold}
            >
              Create stories
            </Typography>
          </Grid>
        </Grid>

        <ScrollDownIcon />
      </Container>
    </>
  );
};

export default HeadSessions;
