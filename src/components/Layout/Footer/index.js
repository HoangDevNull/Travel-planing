import React from 'react';

import {
  Container,
  makeStyles,
  Typography,
  Link,
  Grid,
  Box,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        ONISM
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <footer className={classes.footer}>
        <Container>
          <Grid container justify="space-between">
            <Grid item xs={6}>
              <Copyright />
            </Grid>
            <Grid container justify="flex-end" alignItems="center" item xs={6}>
              <Link color="inherit" href="/">
                Term and conditions
              </Link>
              <Box ml="20px">
                <Link color="inherit" href="/">
                  Privacy policy
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
