import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
  full_width: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex : -1
  },
  image_head: {
    backgroundImage: (props) => `url(${props?.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-x'
  },
  overlay: {
    background: theme.palette.type.includes('dark')
      ? 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)'
      : 'linear-gradient(0deg, rgba(155,155,155,.3) 0%, rgba(155,155,155,.5) 100%)'
  }
}));

const HeadImage = (props) => {
  const classes = useStyles(props);
  return (
    <>
      {/* <Box className={classes.shadow_head}></Box> */}
      <Box className={clsx([classes.image_head, classes.full_width])} />
      <Box className={clsx([classes.overlay, classes.full_width])} />
    </>
  );
};

export default HeadImage;
