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
  }
}));

const HeadImage = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <Box className={classes.root} {...props} />
    </>
  );
};

export default HeadImage;
