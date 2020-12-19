import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { useResize } from './Hook/useResize';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: (props) => `url(${props?.src})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1
  },
  mask: {
    position: 'absolute',
    left: 0,
    top: 0,
    background:
      'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
    zIndex: 0
  }
}));

const HeadImage = (props) => {
  const classes = useStyles(props);

  const size = useResize();

  return (
    <>
      <Box
        className={classes.mask}
        width={size.width + 'px'}
        height={size.height + 'px'}
      />
      <Box
        className={classes.root}
        width={size.width + 'px'}
        height={size.height + 'px'}
      />
    </>
  );
};

export default HeadImage;
