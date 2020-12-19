import React, { useEffect, useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
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
  const [size, setSize] = useState({
    width: window.screen.availWidth,
    height: window.screen.availHeight
  });
  const classes = useStyles(props);

  useEffect(() => {
    window.addEventListener('resize', onresize);
    return () => {
      window.removeEventListener('resize', onresize);
    };
  }, []);

  var onresize = function () {
    setSize({
      width: window.screen.availWidth,
      height: window.screen.availHeight
    });
  };

  let height = size.width < 1280 ? size.height : size.height - 100;
  return (
    <>
      <Box
        className={classes.mask}
        width={size.width + 'px'}
        height={height + 'px'}
      />
      <Box
        className={classes.root}
        width={size.width + 'px'}
        height={height + 'px'}
      />
    </>
  );
};

export default HeadImage;
