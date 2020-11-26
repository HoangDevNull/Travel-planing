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
import ScrollDownIcon from 'components/common/ScrollDownIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    letterSpacing: 2,
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
  btn_get_started_wrapper: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      marginTop: 50,
      justifyContent: 'center'
    }
  },
  btn_get_started: {
    padding: '15px 20px',
    borderRadius: 3,
    transition: 'all .3s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 15px'
    },
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      border: `1px solid rgba(255, 255, 255, 0.5);`
    },
    '&::before': {
      borderImageSlice: '1 1 0 1',
      left: -6,
      top: 2,
      width: 7,
      height: '100%',
      transform: 'skewY(-45deg)'
    },
    '&::after': {
      borderImageSlice: '1 1 0 1',
      bottom: -6,
      right: 2.2,
      width: '100%',
      height: 7,
      transform: 'skewX(-45deg)'
    },
    '&:hover': {
      transform: 'translate(0.5em,-0.5em)',
      textShadow: `2px 0px 8px ${theme.palette.secondary.main}`,
      boxShadow: '-15px 15px 20px #333',
      '&::before, &::after': {
        background: theme.palette.secondary.main
      }
    }
  },
  bottom_action: {
    position: 'relative',
    top: 100,
    left: 0,
    [theme.breakpoints.down('xs')]: {
      top: 50
    }
  },
  btn_arrow: {
    borderRadius: 'unset',
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <HeadImage
        src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="dev"
      />
      <Container className={classes.root}>
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
            {'ADVENTURES'.split('').map((str, i) => (
              <Typography
                className={classes.headline_1}
                variant="h1"
                align="justify"
                color="secondary"
                key={i}
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
        <Grid container className={classes.btn_get_started_wrapper}>
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
          <Button
            color="secondary"
            size="large"
            startIcon={
              <FontAwesomeIcon
                size="lg"
                icon={['fas', 'long-arrow-alt-left']}
              />
            }
            className={classes.btn_arrow}
          >
            <Typography
              variant="h6"
              color="secondary"
              className={classes.headline_2}
            >
              Prev
            </Typography>
          </Button>

          <Button
            color="secondary"
            size="large"
            endIcon={
              <FontAwesomeIcon
                size="lg"
                icon={['fas', 'long-arrow-alt-right']}
              />
            }
            className={classes.btn_arrow}
          >
            <Typography
              variant="h6"
              color="secondary"
              className={classes.headline_2}
            >
              Next
            </Typography>
          </Button>
        </Grid>

        <ScrollDownIcon />
      </Container>
    </>
  );
};

export default Home;
