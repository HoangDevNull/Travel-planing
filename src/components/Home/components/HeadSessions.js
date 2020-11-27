import React, { useRef, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  makeStyles
} from '@material-ui/core';

import clsx from 'clsx';
import { TimelineLite, Power2 } from 'gsap';

import HeadImage from 'components/common/HeadImage';
import CenterDiv from 'components/common/CenterDiv';
import ScrollDownIcon from 'components/common/ScrollDownIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlayArrow } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  slide_wrapper: {
    overflow: 'hidden',
    marginTop: -64
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
    fontWeight: 'bolder',
    [theme.breakpoints.up('xl')]: {
      fontSize: 180
    }
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
    top: 70,
    left: 0,
    [theme.breakpoints.down('xs')]: {
      top: 50
    }
  },
  btn_arrow: {
    borderRadius: 'unset',
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  },

  //  For animation
  headline_2_left_anim: {
    height: 30,
    transform: 'translateY(-120px)'
  },
  headline_2_right_anim: {
    height: 30,
    transform: 'translateY(120px)'
  },
  headline_1_anim: {
    opacity: 0
  }
}));

const settings = {
  dots: false,
  infinite: true,
  fade: true,
  lazyLoad: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
};

const HeadSessions = () => {
  let sliderRef = useRef(null);
  let headLine2Left = useRef(null);
  let headLine2Right = useRef(null);
  let actionButtonRef = useRef(null);
  const tl = new TimelineLite();
  // Animation first page load
  useEffect(() => {
    tl.to('.hero_text_fade', {
      duration: 1.2,
      opacity: 1,
      ease: Power2.easeInOut,
      stagger: {
        amount: 0.5
      }
    }).to([headLine2Left, headLine2Right], {
      duration: 1,
      y: 0,
      ease: Power2.easeInOut,
      delay: -0.7
    });
  }, [tl]);

  const prevSlide = () => {
    sliderRef.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.slickNext();
  };

  const classes = useStyles();
  return (
    <>
      <Slider
        ref={(node) => (sliderRef = node)}
        className={classes.slide_wrapper}
        {...settings}
      >
        <HeadImage src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <HeadImage src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <HeadImage src="https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <HeadImage src="https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </Slider>
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
            <Box height="30px" overflow="hidden">
              <Typography
                variant="h6"
                color="secondary"
                className={clsx([
                  classes.headline_2,
                  classes.headline_2_left_anim
                ])}
                ref={(node) => (headLine2Left = node)}
              >
                Write your travel stories
              </Typography>
            </Box>
          </Grid>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            {'ADVENTURES'.split('').map((str, i) => (
              <Typography
                className={`${clsx([
                  classes.headline_1,
                  classes.headline_1_anim
                ])} hero_text_fade`}
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
            <Box height="30px" overflow="hidden">
              <Typography
                variant="h6"
                color="secondary"
                className={clsx([
                  classes.headline_2,
                  classes.headline_2_right_anim
                ])}
                ref={(node) => (headLine2Right = node)}
              >
                Or be inspired now
              </Typography>
            </Box>
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
            onClick={prevSlide}
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
            onClick={nextSlide}
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

export default HeadSessions;