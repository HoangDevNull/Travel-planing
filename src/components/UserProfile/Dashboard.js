import React from 'react';

import { Box, Typography, makeStyles, Grid, Link } from '@material-ui/core';
import { stories, userFollows } from './data';
import UserFollowCard from './components/UserFollowCard';
import SmallStoryCard from './components/SmallStoryCard';

const useStyles = makeStyles((theme) => ({
  root: {},
  font_bold: {
    fontWeight: 'bold'
  }
}));

const DashBoard = () => {
  const classes = useStyles();
  return (
    // <Paper>
    <Box pl="15px" mt="15px">
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="h6" className={classes.font_bold}>
            Your dashboard
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="h3"
            color="primary"
            className={classes.font_bold}
          >
            450
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Views today</Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="h3"
            color="primary"
            className={classes.font_bold}
          >
            369
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Post views</Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="h3"
            color="primary"
            className={classes.font_bold}
          >
            9
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Search appereances </Typography>
        </Grid>

        <Grid item>
          <Box mt="20px" />
        </Grid>

        <Grid item>
          <Typography variant="h6" className={classes.font_bold}>
            Visitor
          </Typography>
        </Grid>
        <Grid item container spacing={1}>
          {userFollows.map((item, index) => (
            <Grid item xs={12} key={index}>
              <UserFollowCard {...item} />
            </Grid>
          ))}
        </Grid>

        <Grid item>
          <Box mt="20px" />
        </Grid>

        <Grid item>
          <Typography variant="h6" className={classes.font_bold}>
            You may like there stories
          </Typography>
        </Grid>
        <Grid item container spacing={3}>
          {stories.splice(0, 4).map((item, index) => (
            <Grid item xs={12} key={index}>
              <SmallStoryCard {...item} />
            </Grid>
          ))}
        </Grid>

        <Grid item>
          <Box mt="20px">
            <Link
              component="button"
              underline="none"
              color="primary"
              variant="button"
              className={classes.font_bold}
            >
              SEE ALL RECOMENDATIONS
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
    // </Paper>
  );
};

export default DashBoard;
