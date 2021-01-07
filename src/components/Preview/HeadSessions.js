import React from 'react';
import {
  Avatar,
  Box,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

import HeadImage from 'components/common/HeadImage';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  head_image_wrapper: {
    position: 'relative',
    display: 'block',
    boxSizing: 'borderBox',
    overflow: 'hidden',
    marginTop: -64,
    [theme.breakpoints.down('xs')]: {
      marginTop: -56
    }
  },
  avatar: {
    width: 100,
    height: 100,
    border: '5px solid #fff'
  },
  font_bold: {
    fontWeight: 'bold'
  }
}));

const HeadSession = (props) => {
  const classes = useStyles();
  const { user, title, image, location, createdAt } = props;
  return (
    <>
      <Box className={classes.head_image_wrapper}>
        <HeadImage src={image} />
      </Box>
      <Container className={classes.root}>
        <Grid container justify="center" alignItems="center" spacing={5}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="center"
              color="secondary"
              className={classes.font_bold}
              gutterBottom
            >
              {createdAt}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              color="secondary"
              align="center"
              className={classes.font_bold}
              gutterBottom
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Avatar src={user?.avatar} className={classes.avatar} spacing={3} />
            <Typography
              variant="h5"
              color="secondary"
              className={classes.font_bold}
              gutterBottom
            >
              {user?.username}
            </Typography>
            <Typography variant="body1" color="secondary" gutterBottom>
              {location}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeadSession;
