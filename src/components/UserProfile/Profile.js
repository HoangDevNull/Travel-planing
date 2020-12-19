import React from 'react';

import {
  Box,
  Typography,
  makeStyles,
  Grid,
  Button,
  Divider,
  Link
} from '@material-ui/core';

import {
  stories2 as storiesData,
  userFollows as userFollowsData,
  historyStories
} from './data';
import StoryCard from './components/StoryCard';
import UserFollowCard from './components/UserFollowCard';

import HomeStoryCard from 'components/Home/components/StoryCard';

const useStyles = makeStyles((theme) => ({
  root: {},
  btn_tab: {
    padding: '10px 130px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 80px'
    }
  },
  font_bold: {
    fontWeight: 'bold'
  }
}));

const Profile = () => {
  const [stories, setStories] = React.useState([...storiesData]);
  const [userFollows, setUserFollows] = React.useState(userFollowsData);

  const classes = useStyles();
  return (
    <>
      <Button className={classes.btn_tab} variant="contained" color="primary">
        Profile
      </Button>
      <Divider />
      <Box pt="50px" p="10px">
        <Grid container spacing={1}>
          <Grid item>
            <Typography variant="h6" className={classes.font_bold}>
              About
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              I'm more experienced in eCommerce web projects and mobile banking
              apps, but also like to work with creative projects, such as
              landing pages or unusual corporate websites.
            </Typography>
          </Grid>
          <Grid item>
            <Link
              component="button"
              underline="none"
              color="primary"
              variant="button"
              className={classes.font_bold}
            >
              See more
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Box mt="20px" />
          </Grid>

          {/* Stories */}
          <Grid item container alignItems="center">
            <Typography variant="h6" className={classes.font_bold}>
              Stories
            </Typography>
            <Box ml="20px">
              <Typography variant="body2">6 of 12</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt="10px" />
          </Grid>
          <Grid item container spacing={5}>
            {stories.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StoryCard {...item} />
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
                onClick={() => {
                  stories.length === 6
                    ? setStories([...stories, ...storiesData])
                    : setStories(stories.splice(0, 6));
                }}
              >
                {stories.length > 6 ? 'Show less (6)' : 'Show All (12)'}
              </Link>
            </Box>
          </Grid>

          {/* End Stories */}
          <Grid item xs={12}>
            <Box mt="20px" />
          </Grid>

          {/* User follow */}

          <Grid item container alignItems="center">
            <Typography variant="h6" className={classes.font_bold}>
              User follow
            </Typography>
            <Box ml="20px">
              <Typography variant="body2">6 of 12</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt="10px" />
          </Grid>
          <Grid item container spacing={5}>
            {userFollows.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <UserFollowCard {...item} />
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
                onClick={() => {
                  userFollows.length === 6
                    ? setUserFollows([...userFollows, ...userFollowsData])
                    : setUserFollows(userFollows.splice(0, 6));
                }}
              >
                {userFollows.length > 6 ? 'Show less (6)' : 'Show All (12)'}
              </Link>
            </Box>
          </Grid>

          {/* End user Follow */}
          <Grid item xs={12}>
            <Box mt="20px" />
          </Grid>

          {/* History viewed */}

          <Grid item container alignItems="center">
            <Typography variant="h6" className={classes.font_bold}>
              History viewed
            </Typography>
            <Box ml="20px">
              <Typography variant="body2">6 of 12</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt="10px" />
          </Grid>
          <Grid item container spacing={5}>
            {historyStories.map((item, index) => (
              <Grid item xs={12} key={index}>
                <HomeStoryCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
