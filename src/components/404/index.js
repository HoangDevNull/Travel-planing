import React, { useRef } from 'react';
import { Grid, withStyles } from '@material-ui/core';

const styles = (theme) => ({});

function PageNotFound() {
  let scene = useRef(null);

  return (
    <Grid container>
    </Grid>
  );
}

export default withStyles(styles)(PageNotFound);
