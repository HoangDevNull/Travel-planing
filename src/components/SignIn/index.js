import React from 'react';

import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h1"> Sign in</Typography>
    </Box>
  );
};

export default SignIn;
