import React, { useRef, useEffect } from 'react';

import { makeStyles, Box, Typography } from '@material-ui/core';

import { TimelineLite, Power2, Power3 } from 'gsap';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    background: theme.palette.primary.bnw,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 99999999999
  },
  center: {
    zIndex: 2,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));

const phrases = [
  {
    phrase: 'Sharing is Caring, Good for Life and Good for Business',
    coined: 'The Salvation Army'
  },
  {
    phrase:
      'Life isn’t about finding yourself. Life is about creating yourself',
    coined: 'George Bernard Shaw'
  },
  {
    phrase: 'You only live once, but if you do it right, once is enough',
    coined: 'Mae West'
  }
];

const Loading = ({ isLoading }) => {
  let containerRef = useRef(null);
  let textLoading = useRef(null);

  const tl = new TimelineLite();
  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = 'hidden';
      tl.to(containerRef, {
        duration: 1,
        height: '0',
        ease: Power2.easeIn
      }).call(() => {
        // containerRef.remove();
        document.body.style.overflow = 'unset';
      });
    } else {
      tl.to(textLoading, {
        duration: 2,
        y: -50,
        ease: Power3.easeOut
      }).to(textLoading, {
        duration: 2,
        y: -150,
        opacity: 0,
        ease: Power3.easeOut
      });
    }
  }, [isLoading, tl]);

  const getRandomPhrase = () => {
    const index = Math.floor(Math.random() * (phrases.length - 0) + 0);
    return phrases[index];
  };

  const phrase = useRef(getRandomPhrase());

  const classes = useStyles();
  console.log('re-render')
  return (
    <Box className={classes.root} ref={(node) => (containerRef = node)}>
      <Box className={classes.center}>
        <Box ref={(node) => (textLoading = node)}>
          <Typography variant="button" color="secondary">
            {phrase.current?.phrase}
          </Typography>
          <br />
          <Box width="100%" textAlign="right" mt="10px">
            <Typography variant="caption" color="secondary">
              {phrase.current?.coined}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Loading;
