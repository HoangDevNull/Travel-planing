import React, { useEffect, useState } from 'react';

import {
  makeStyles,
  Backdrop,
  Box,
  Container,
  Typography
} from '@material-ui/core';

import {
  HomeRounded,
  GroupRounded,
  RecordVoiceOverRounded,
  BallotRounded
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TimelineLite, Power3 } from 'gsap';

import { NavLink } from 'react-router-dom';
import ThemeSelect from './components/ThemeSelect';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      zIndex: 99999999999,
      top: 64,
      backgroundColor: theme.palette.type.includes('dark')
        ? 'rgba(51,51,51,1)'
        : 'rgba(255,255,255,1)'
    },
    text: {
      overflow: 'hidden',
      height: 135,
      margin: 0,
      cursor: 'pointer'
    },
    hide_text: {
      height: 135
    }
  };
});

const routes = [
  {
    name: 'home',
    icon: <HomeRounded />,
    to: '/home'
  },
  {
    name: 'top-des',
    icon: <BallotRounded />,
    to: '/top'
  },

  {
    name: 'about',
    icon: <GroupRounded />,
    to: '/about'
  },
  {
    name: 'partner',
    icon: <RecordVoiceOverRounded />,
    to: '/partner'
  }
];

const SideBar = () => {
  const { t } = useTranslation('navbar');
  const history = useHistory();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [textTl] = useState(new TimelineLite({ paused: true }));
  useEffect(() => {
    textTl
      .staggerTo(
        '.nav_item',
        1.5,
        {
          y: 135,
          ease: Power3.easeInOut,
          delay: 0.3
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
  };

  const classes = useStyles();
  return (
    <Backdrop
      classes={{ root: classes.root }}
      transitionDuration={{
        enter: 800,
        exit: 2000
      }}
      open={isOpen}
    >
      <Container maxWidth="xl">
        <Box width="100%" height="87vh" position="relative">
          <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            position="absolute"
            top="64px"
          >
            {routes.map((ele, i) => (
              <Typography
                key={i}
                className={classes.text}
                variant="h1"
                onClick={() => handleNavigation(ele.to)}
              >
                <div className={`nav_item ${classes.hide_text}`}>
                  {t(ele.name)}
                </div>
              </Typography>
            ))}
          </Box>
          <ThemeSelect />
        </Box>
      </Container>
    </Backdrop>
  );
};

export default SideBar;
