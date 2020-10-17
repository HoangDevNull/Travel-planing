import React from 'react';

import { Button, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});

const RightSide = () => {
  const classes = useStyles();

  return (
    <Box>
      <Button color="primary">Sign in</Button>
      <Button color="primary">Sign Up</Button>
    </Box>
  );
};

export default RightSide;
