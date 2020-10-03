import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

function App() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6}>
        <Paper elevation={3}>
          <Typography variant="h1" align="center">Travel app</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
