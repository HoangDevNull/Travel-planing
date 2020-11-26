import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  makeStyles
} from '@material-ui/core';

import { PlayArrow } from '@material-ui/icons';

import HeadImage from 'components/common/HeadImage';
import CenterDiv from 'components/common/CenterDiv';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh'
  },
  circle_btn: {
    border: `1px solid ${theme.palette.secondary.main}`,
    display: 'flex',
    justifyContent: 'center'
  },
  headline_2: {
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontWeight: 400,
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      letterSpacing: 'normal'
    }
  },
  headline_1: {
    fontSize: '10vw',
    fontWeight: 'bolder'
  },
  btn_get_started: {
    padding: '15px 20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 15px'
    }
  },
  bottom_action: {
    position: 'relative',
    top: 100,
    left: 0,
  }
}));

const Home = () => {
  const classes = useStyles();
  let containerRef = React.useRef(null);

  React.useEffect(() => {
    const width = containerRef.width;
  });

  return (
    <>
      <HeadImage
        src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="dev"
      />
      <Container maxWidth="xl" className={classes.root}>
        <Grid container justify="flex-end">
          <CenterDiv>
            <Box mr="10px">
              <Typography variant="body1" color="secondary">
                Watch video
              </Typography>
            </Box>
            <IconButton color="secondary" className={classes.circle_btn}>
              <PlayArrow />
            </IconButton>
          </CenterDiv>
        </Grid>
        {/* Start hero text */}
        <Box width="100%" mt="40px">
          <Grid container justify="flex-start">
            <Typography
              variant="h6"
              color="secondary"
              className={classes.headline_2}
            >
              Write your travel stories
            </Typography>
          </Grid>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            {'ADVENTURES'.split('').map((str) => (
              <Typography
                className={classes.headline_1}
                variant="h1"
                align="justify"
                color="secondary"
              >
                {str}
              </Typography>
            ))}
          </Box>
          <Grid container justify="flex-end">
            <Typography
              variant="h6"
              color="secondary"
              className={classes.headline_2}
            >
              Or be inspired now
            </Typography>
          </Grid>
        </Box>
        {/* End hero text */}
        <Grid container justify="flex-start">
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            className={classes.btn_get_started}
          >
            get started
          </Button>
        </Grid>

        <Grid
          container
          justify="space-between"
          className={classes.bottom_action}
        >
          <Button color="secondary" size="large">
            Prev
          </Button>
          <Button color="secondary" size="large">
            Next
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
