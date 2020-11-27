import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: (props) => `url(${props?.src})`,
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1
  },
  mask: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    minHeight: '100vh',
    background:
      'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
    zIndex: 0
  }
}));

const HeadImage = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <Box className={classes.mask} />
      <Box className={classes.root} />
    </>
  );
};

export default HeadImage;
