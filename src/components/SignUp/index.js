import React from 'react';

import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const SignUp = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h1">Sign up</Typography>
    </Box>
  );
};

export default SignUp;
