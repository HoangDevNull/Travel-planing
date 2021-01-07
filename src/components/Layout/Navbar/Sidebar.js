import React, { useEffect, useRef } from 'react';

import {
  makeStyles,
  Backdrop,
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Hidden
} from '@material-ui/core';

import clsx from 'clsx';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TimelineLite, Power3 } from 'gsap';

import { sidebarAction } from 'redux/sidebar';
import ThemeSelect from './components/ThemeSelect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, far, fas);

const useStyles = makeStyles((theme) => {
  return {
    root: {
      zIndex: 999,
      top: 0,
      // backgroundColor: '#34495e',
      backgroundColor: theme.palette.primary.main,
      display: 'none',
      overflow: 'auto'
    },
    bold_font: {
      fontWeight: 'bold'
    },
    nav_text_size: {
      [theme.breakpoints.down('md')]: {
        fontSize: '30px !important'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '22px !important'
      }
    },
    contact_spacing: {
      marginBottom: 15,
      marginTop: 15,
      [theme.breakpoints.down('md')]: {
        marginTop: 16.5
      }
    },
    center_mobile: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    pl_20: {
      '&:nth-child(even)': {
        paddingLeft: 50
      },
      [theme.breakpoints.down('sm')]: {
        '&:nth-child(even)': {
          paddingLeft: 'unset'
        }
      }
    },
    nav_hover: {
      cursor: 'pointer',
      transition: 'all .4s ease-in-out',
      [theme.breakpoints.up('md')]: {
        opacity: 0.5,
        '&:hover': {
          opacity: 1,
          textShadow: '1px 0px 5px #fff'
        }
      }
    },
    nav_item: {
      cursor: 'pointer',
      overflow: 'hidden',
      width: 'fit-content',
      height: 55,
      marginBottom: 60,
      // transition: 'all .4s ease-in-out',
      // [theme.breakpoints.up('md')]: {
      //   opacity: 0.5,
      //   '&:hover': {
      //     opacity: 1,
      //     textShadow: '1px 0px 5px #fff'
      //   }
      // },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 10
      }
    },
    // Animation
    bg_reveal: {
      zIndex: 9999,
      bottom: 0,
      top: 'unset',
      height: 0,
      display: 'block',
      backgroundColor: '#fff'
    },
    nav_item_animation: {
      transform: 'translate(0px, 100px)'
    },
    social_animation: {
      opacity: 0
    }
  };
});

const routes = [
  {
    name: 'top-des',
    to: '/'
  },
  {
    name: 'top-stories',
    to: '/stories'
  },
  {
    name: 'feature-video',
    to: '/videos'
  },
  {
    name: 'about',
    to: '/about'
  }
];

const SideBar = () => {
  // Common variable
  const { t } = useTranslation('navbar');
  const history = useHistory();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const pageLoadRef = useRef(false);

  // Animated variable
  let menuReveal = useRef(null);
  let backgroundRevealTheme = useRef(null);

  const tl = new TimelineLite();

  history.listen((location, action) => {
    // location is an object like window.location
    dispatch(sidebarAction.loadSideBar(false));
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });

  useEffect(() => {
    if (pageLoadRef.current) {
      if (isOpen) {
        // Show backdrop
        tl.to(backgroundRevealTheme, {
          duration: 0.5,
          height: '100%',
          ease: Power3.easeIn,
          delay: 0.3
        })
          .to(backgroundRevealTheme, {
            duration: 0,
            top: 0,
            bottom: 'unset'
          })
          .to(backgroundRevealTheme, {
            duration: 0.3,
            height: 0,
            ease: Power3.easeOut
          })
          .to(menuReveal, {
            duration: 0,
            css: { display: 'block' },
            delay: -0.3
          })
          .to('.nav_item', {
            duration: 0.8,
            ease: Power3.easeOut,
            y: 0,
            stagger: {
              amount: 0.1
            }
          })
          .to('.contact', {
            duration: 1,
            ease: Power3.easeOut,
            y: 0,
            stagger: {
              amount: 0.1
            },
            delay: -0.7
          })
          .to('.social', {
            duration: 1,
            ease: Power3.easeInOut,
            opacity: 1,
            stagger: {
              amount: 0.2
            },
            delay: -0.7
          });
      } else {
        // close backdrop
        tl.to('.nav_item', {
          duration: 0.8,
          ease: Power3.easeOut,
          y: 100,
          stagger: {
            amount: 0.1
          }
        })
          .to('.contact', {
            duration: 1,
            ease: Power3.easeOut,
            y: 100,
            stagger: {
              amount: 0.1
            },
            delay: -0.7
          })
          .to('.social', {
            duration: 0.5,
            ease: Power3.easeInOut,
            opacity: 0,
            stagger: {
              amount: 0.2
            },
            delay: -1
          })
          .to(backgroundRevealTheme, {
            duration: 0.5,
            height: '100%',
            ease: Power3.easeIn,
            delay: -0.5
          })
          .to(backgroundRevealTheme, {
            duration: 0,
            bottom: 0,
            top: 'unset'
          })
          .to(backgroundRevealTheme, {
            duration: 0.3,
            height: 0,
            ease: Power3.easeOut
          })
          .to(menuReveal, {
            duration: 0,
            css: { display: 'none' },
            delay: -0.3
          });
      }
    }

    pageLoadRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleNavigation = (to) => {
    history.push(to);
    dispatch(sidebarAction.loadSideBar(false));
  };

  const classes = useStyles();
  return (
    <>
      <Backdrop
        ref={(node) => (backgroundRevealTheme = node)}
        className={classes.bg_reveal}
        open={true}
      />
      <Backdrop
        ref={(node) => (menuReveal = node)}
        classes={{ root: classes.root }}
        open={true}
      >
        <Container>
          <Box
            width="100%"
            height="87vh"
            position="relative"
            className="landscape_container"
          >
            <Box
              width="100%"
              height="90%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Grid container justify="space-around">
                <Grid item sm={12} md={9} container>
                  {routes.map((ele, i) => (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      key={i}
                      className={clsx(
                        classes.pl_20,
                        classes.center_mobile,
                        classes.nav_hover
                      )}
                      onClick={() => handleNavigation(ele.to)}
                    >
                      <Box className={classes.nav_item}>
                        <Typography
                          component="div"
                          className={`${clsx(
                            classes.bold_font,
                            classes.nav_item_animation
                          )} nav_item`}
                          variant="h3"
                          color="secondary"
                        >
                          {t(ele.name)}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Hidden mdUp>
                  {/* Fix GSAP not found element and show warning on mobile  */}
                  <Box className="contact" />
                </Hidden>
                <Hidden smDown>
                  <Grid item sm={12} md={3}>
                    <Box
                      overflow="hidden"
                      height="33px"
                      className={classes.contact_spacing}
                    >
                      <Typography
                        className={`${clsx(
                          classes.bold_font,
                          classes.nav_item_animation
                        )} contact`}
                        color="secondary"
                        variant="h5"
                      >
                        CONTACT
                      </Typography>
                    </Box>

                    <Box overflow="hidden" height="33px">
                      <Typography
                        color="secondary"
                        variant="h6"
                        className={`${classes.nav_item_animation} contact`}
                      >
                        +9447443706
                      </Typography>
                    </Box>
                    <Box overflow="hidden" height="33px">
                      <Typography
                        color="secondary"
                        variant="h6"
                        className={`${classes.nav_item_animation} contact`}
                      >
                        pqhoang.cute@onism.net
                      </Typography>
                    </Box>
                    <Box overflow="hidden" height="33px">
                      <Typography
                        color="secondary"
                        variant="h6"
                        className={`${classes.nav_item_animation} contact`}
                      >
                        Cam Le District, Da Nang City
                      </Typography>
                    </Box>
                  </Grid>
                </Hidden>
              </Grid>
            </Box>

            {/* For social icon and Toggle theme */}
            <Grid
              container
              justify="flex-start"
              className={classes.center_mobile}
            >
              <Grid item sm={12} md={5}>
                <Box display="flex">
                  <IconButton
                    color="secondary"
                    className={`${classes.social_animation} social`}
                  >
                    <FontAwesomeIcon size="lg" icon={['fab', 'linkedin-in']} />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    className={`${classes.social_animation} social`}
                  >
                    <FontAwesomeIcon size="lg" icon={['fab', 'instagram']} />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    className={`${classes.social_animation} social`}
                  >
                    <FontAwesomeIcon size="lg" icon={['fab', 'reddit']} />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    className={`${classes.social_animation} social`}
                  >
                    <FontAwesomeIcon size="lg" icon={['fab', 'facebook']} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item sm={12} md={7}>
                <Box pt="10px" className={`${classes.social_animation} social`}>
                  <ThemeSelect />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Backdrop>
    </>
  );
};

export default SideBar;
