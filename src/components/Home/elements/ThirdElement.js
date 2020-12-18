import React from 'react';

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import StoryCard from '../components/StoryCard';
import ListUser from '../components/ListUser';

import { stories, topUsers } from '../data';
import FormEmail from '../components/FormEmail';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50
  },
  font_bold: {
    fontWeight: 'bold'
  },
  border_bottom: {
    borderBottom: `2px solid ${theme.palette.primary.textColor}`
  }
}));

const ThirdElement = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container justify="space-around" spacing={3}>
          <Grid item xs={12}>
            <Box mb="15px">
              <Typography variant="h5" className={classes.font_bold}>
                Stories
              </Typography>
            </Box>
          </Grid>
          <Grid container item xs={12} md={9} spacing={3}>
            <Grid container item xs={12}>
              <Box ml="-3px" mr="50px">
                <Typography variant="h6" className={classes.font_bold}>
                  Feature
                </Typography>
              </Box>
              <Typography variant="h6" className={classes.font_bold}>
                Recent
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {stories.map((item) => (
                <StoryCard {...item} key={item.id} />
              ))}
            </Grid>
          </Grid>
          <Grid container item xs={12} md={3}>
            <Grid item xs={12}>
              <Box className={classes.border_bottom}>
                <Typography variant="h6" className={classes.font_bold}>
                  Top inspirers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <ListUser data={topUsers} />
            </Grid>

            <Grid item xs={12}>
              <FormEmail />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThirdElement;
