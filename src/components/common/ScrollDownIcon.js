import React from 'react';

import { Grid, Box, Typography, makeStyles } from '@material-ui/core';

import gsap, { Power3 } from 'gsap';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 20
  },
  mouse: {
    width: 'max(16.384px,min(1.6vw,25.6px))',
    height: 'max(26.624px,min(2.6vw,41.6px))',
    border: 'max(1.024px,min(.1vw,1.6px)) solid #fff',
    borderRadius: 'max(102.4px,min(10vw,160px))',
    display: 'flex',
    justifyContent: 'center'
  },
  dot: {
    background: '#fff',
    width: 5,
    height: 5,
    transform: 'translateY(5px)',
    borderRadius: '50%'
  },
  scroll_text: {
    letterSpacing: 5,
    marginTop: 15,
    color: '#fff'
  }
}));

const ScrollDownIcon = () => {
  let dotRef = React.useRef(null);
  let textRef = React.useRef(null);
  React.useEffect(() => {
    gsap.to(dotRef, {
      duration: 1.5,
      y: 35,
      scale: 0,
      ease: Power3.easeInOut,
      repeat: -1
    });
    gsap.to(textRef, {
      duration: 1.5,
      y: 2,
      color: '#4e5559',
      ease: Power3.easeInOut,
      repeat: -1
    });
  }, []);

  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Box className={classes.mouse}>
        <Box className={classes.dot} ref={(node) => (dotRef = node)} />
      </Box>
      <Typography
        color="secondary"
        variant="caption"
        align="center"
        className={classes.scroll_text}
        ref={(node) => (textRef = node)}
      >
        Scroll
      </Typography>
    </Grid>
  );
};

export default ScrollDownIcon;
