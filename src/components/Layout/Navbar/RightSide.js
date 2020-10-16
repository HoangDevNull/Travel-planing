import React from 'react';

import { AccountCircle } from '@material-ui/icons';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {}
  };
});

const RightSide = () => {
  const classes = useStyles();
  return (
    <div>
      <Button>Login</Button>
    </div>
  );
};

export default RightSide;
