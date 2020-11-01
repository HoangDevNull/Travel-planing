import React, { useEffect, useState } from 'react';

import {
  makeStyles,
  Backdrop,
  Box,
  Container,
  Typography,
  Hidden
} from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TimelineLite, Power1 } from 'gsap';

import { sidebarAction } from 'redux/sidebar';
import ThemeSelect from './components/ThemeSelect';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      zIndex: 99999999999,
      top: 64,
      backgroundColor: theme.palette.type.includes('dark')
        ? 'rgba(51,51,51,1)'
        : 'rgba(255,255,255,1)',
      [theme.breakpoints.down('xs')]: {
        top: 56
      }
    },
    text: {
      overflow: 'hidden',
      height: 135,
      margin: 0,
      cursor: 'pointer',
      [theme.breakpoints.down('xs')]: {
        height: 'fit-content'
      }
    },
    hide_text: {
      color: theme.palette.type.includes('dark') ? '#FFF' : '#7f8c8d',
      textAlign: 'center',
      fontWeight: 'bold',
      height: '100%',
      '&:before': {
        backgroundColor: theme.palette.primary.main
      }
    },
    text_overlap: {
      fontSize: 200,
      fontWeight: 'bolder',
      color: '#ddd',
      transform: 'rotate(90deg)',
      transformOrigin: '20% 55%',
      [theme.breakpoints.down('xs')]: {
        fontSize: 150,
        transformOrigin: '10% 55%'
      }
    }
  };
});

const routes = [
  {
    name: 'home',
    to: '/home'
  },
  {
    name: 'top-des',
    to: '/top'
  },

  {
    name: 'about',
    to: '/about'
  },
  {
    name: 'partner',
    to: '/partner'
  }
];

const SideBar = () => {
  const { t } = useTranslation('navbar');
  const history = useHistory();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [textTl] = useState(new TimelineLite({ paused: true }));
  useEffect(() => {
    textTl
      .staggerTo(
        '.nav_item',
        1.5,
        {
          y: 135,
          ease: Power1.easeIn,
          delay: 0.5
        },
        0.1
      )
      .reverse();
  }, [textTl]);
  useEffect(() => {
    textTl.reversed(!textTl.reversed());
  }, [isOpen, textTl]);

  const handleNavigation = (to) => {
    history.push(to);
    dispatch(sidebarAction.loadSideBar(false));
  };

  const classes = useStyles();

  const { location } = history;
  return (
    <Backdrop
      classes={{ root: classes.root }}
      transitionDuration={{
        enter: 300,
        exit: 500
      }}
      open={isOpen}
    >
      <Container>
        <Hidden mdDown>
          <Box
            position="absolute"
            left="0"
            top="0"
            className={classes.text_overlap}
          >
            STORIES
          </Box>
        </Hidden>
        <Box width="100%" height="87vh" position="relative">
          <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            position="absolute"
          >
            {routes.map((ele, i) => (
              <Box position="relative" key={i}>
                <Typography
                  component="div"
                  className={classes.text}
                  variant="h1"
                  onClick={() => handleNavigation(ele.to)}
                >
                  <div
                    className={`nav_item ${
                      location.pathname === ele.to && 'nav_item_active'
                    } ${classes.hide_text}`}
                  >
                    {t(ele.name)}
                  </div>
                </Typography>
              </Box>
            ))}
          </Box>
          <ThemeSelect />
        </Box>
      </Container>
    </Backdrop>
  );
};

export default SideBar;
