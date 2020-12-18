import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  Button,
  Divider
} from '@material-ui/core';
import StoryCard from '../components/StoryCard';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50
  },
  font_bold: {
    fontWeight: 'bold'
  }
}));

const stories = [
  {
    id: 0,
    image:
      'https://images.pexels.com/photos/5554235/pexels-photo-5554235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Buenos Aires vegetarian: the best restaurants ',
    content:
      'Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts -Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts - bu but there’s more to the city than meaty menus ',
    user: {
      fullName: 'Lucy Lovell',
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_1.png'
    }
  },
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/5225474/pexels-photo-5225474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Travel around the word',
    content:
      'Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts - but there’s more to the city than meaty menus ',
    user: {
      fullName: 'Tran dan',
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_2.png'
    }
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Travel around the word',
    content:
      'Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts - but there’s more to the city than meaty menus ',
    user: {
      fullName: 'Tran dan',
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_3.png'
    }
  }
];

const ThirdElement = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container justify="space-around" spacing={3}>
          <Grid item xs={12}>
            <Box mb="15px">
              <Typography Typography className={classes.font_bold}>
                Stories
              </Typography>
            </Box>
          </Grid>
          <Grid container item xs={12} md={8} spacing={3}>
            <Grid container item xs={12}>
              <Typography variant="h6" className={classes.font_bold}>
                Feature
              </Typography>
              <Box ml="50px">
                <Typography variant="h6" className={classes.font_bold}>
                  Recent
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              {stories.map((item) => (
                <StoryCard {...item} key={item.id} />
              ))}
            </Grid>
          </Grid>
          <Grid container item xs={12} md={4}>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.font_bold}>
                Top inspirers
              </Typography>
              <Divider />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThirdElement;
