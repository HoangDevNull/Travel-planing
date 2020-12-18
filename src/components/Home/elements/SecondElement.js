import React from 'react';

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import CategoryCard from '../components/CategoryCard';
import { categories } from '../data';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    paddingBottom: 80,
    width: '100%',
    background: '#272A33',
    zIndex: 2
  },
  title: {
    fontWeight: 'bold'
  }
}));

const SecondElement = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container justify="space-around" spacing={3}>
          <Grid item xs={12}>
            <Box mb="15px">
              <Typography
                variant="h5"
                className={classes.title}
                color="secondary"
              >
                Travel inspiration
              </Typography>
            </Box>
          </Grid>

          {categories.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CategoryCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SecondElement;
