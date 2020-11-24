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
    zIndex: -1
  },
  image_head: {
    backgroundImage: (props) => `url(${props?.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-x'
  }
}));

const HeadImage = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <Box className={clsx([classes.image_head, classes.full_width])} />
    </>
  );
};

export default HeadImage;
