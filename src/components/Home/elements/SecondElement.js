import React, { useRef, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import CategoryCard from '../components/CategoryCard';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,
    width: '100%',
    background: '#272A33'
  },
  title: {
    fontWeight: 'bold'
  }
}));

const categories = [
  {
    id: 0,
    image:
      'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Travel on budget'
  },
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Adventure travel'
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/5875846/pexels-photo-5875846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Road trip'
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Backbacking'
  }
];

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
