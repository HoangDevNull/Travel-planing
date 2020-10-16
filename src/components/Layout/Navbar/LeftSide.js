import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1
    }
  };
});

const LeftSide = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">Travel</Typography>
    </div>
  );
};

export default LeftSide;
