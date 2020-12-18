import React from 'react';

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import AppleBrand from 'assets/images/apple-brand.svg';
import GooglePlayBrand from 'assets/images/google-play-badge.png';
import Phone from 'assets/images/phone.png';

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      'url(https://images.pexels.com/photos/601798/pexels-photo-601798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
    padding: '0px 10px',
    marginTop: 150,
    marginBottom: 50
  },
  title: {
    fontWeight: 'bold'
  },
  line: {
    width: '40%',
    height: 2,
    backgroundColor: theme.palette.secondary.main
  },
  brand: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
  },
  no_padding: {
    padding: 0
  }
}));

const FifthElement = () => {
  const classes = useStyles();

  return (
    <Box width="100%" className={classes.root}>
      <Container>
        <Grid container>
          <Grid
            container
            justify="center"
            alignItems="center"
            item
            xs={6}
            spacing={5}
          >
            <Grid item xs={12}>
              <Box mt="15px">
                <Typography variant="h4" color="secondary" align="left" noWrap>
                  Be inspired anywhere!
                </Typography>
              </Box>
              <Box mt="20px" className={classes.line} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="secondary" align="left">
                Packed with tips and advice from our on-the-ground experts, our
                city guides app (IOS and Android) is the ultimate resource
                before and during a trip
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex">
                <Box width="120px">
                  <img src={AppleBrand} alt="apple" className={classes.brand} />
                </Box>
                <Box width="150px" mt="-9px" ml="20px">
                  <img
                    src={GooglePlayBrand}
                    alt="apple"
                    className={classes.brand}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.no_padding}>
            <Box width="85%" ml="auto" mb="-9.5px" mt="-100px">
              <img src={Phone} alt="apple" className={classes.brand} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FifthElement;
