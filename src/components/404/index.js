import React, { useRef } from 'react';
import {
  withStyles,
  Button,
  Typography,
  Hidden,
  Container,
  Grid
} from '@material-ui/core';

import { useTranslation } from 'react-i18next';

import clsx from 'clsx';
import Parallax0 from 'assets/images/404/parallax0.png';
import Parallax1 from 'assets/images/404/parallax1.png';
import Parallax3 from 'assets/images/404/parallax3.png';
import Parallax4 from 'assets/images/404/parallax4.png';
import Parallax5 from 'assets/images/404/parallax5.png';
import Parallax6 from 'assets/images/404/parallax6.png';
import Parallax7 from 'assets/images/404/parallax7.png';
import Parallax8 from 'assets/images/404/parallax8.png';
import Mobile404 from 'assets/images/404/mobile.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = (theme) => ({
  root: {
    display: 'block',
    overflow: 'hidden',
    color: '#FFAF1C',
    minHeight: '100vh'
  },
  img: {
    backgroundPosition: 'bottom center',
    backgroundSize: 'auto 1038px',
    backgroundRepeat: 'repeat-x',
    width: '100%',
    height: '100%',
    position: 'fixed',
    objectFit: 'cover',
    zIndex: -1
  },
  _404_wrapper: {
    position: 'absolute',
    top: 0,
    left: '50%',
    textAlign: 'center',
    marginTop: '3vh',
    fontWeight: 'bolder'
  },
  center: {
    position: 'relative',
    left: '-50%'
  },
  _error_text: {
    fontSize: '4.5rem',
    marginBottom: -50,
    color: '#7B271C',
    textTransform: 'uppercase'
  },
  _404_text: {
    fontSize: '10rem',
    letterSpacing: 20,
    color: '#7B271C',
    [theme.breakpoints.down('sm')]: {
      fontSize: '8rem',
      letterSpacing: 10
    }
  },
  _bottomWrapper: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    zIndex: 1,
    textAlign: 'center',
    marginBottom: '3vh'
  },
  btn_goBack: {
    backgroundColor: '#FFAF1C',
    color: '#000',
    borderRadius: 25
  },
  _h90: {
    minHeight: '90vh'
  },
  fontType: {
    fontFamily: "'Catamaran', sans-serif !important"
  }
});

const PageNotFound = ({ classes }) => {
  const imgRef = useRef([]);
  const { t } = useTranslation('404');

  const handleMouseMove = (e) => {
    // Apply styles for each image
    imgRef.current.forEach((image) => {
      if (image) {
        const speed = image.getAttribute('data-speed');
        const speedX = window.innerWidth - e.clientX * speed;
        const speedY = window.innerHeight - e.clientY * speed;

        image.style.transform = `translateX(${speedX / 2000}px) translateY(${
          speedY / 100
        }px)`;
      }
    });
  };
  return (
    <>
      <Hidden smDown>
        <div
          className={clsx([classes.root, classes.fontType])}
          onMouseMove={handleMouseMove}
        >
          <div className={classes._404_wrapper}>
            <div className={clsx([classes.center, classes._error_text])}>
              {t('error')}
            </div>
            <div className={clsx([classes.center, classes._404_text])}>404</div>
          </div>
          <img
            className={classes.img}
            ref={(ref) => imgRef.current.push(ref)}
            data-speed="2"
            src={Parallax0}
            alt=""
          />
          <img
            className={classes.img}
            ref={(ref) => imgRef.current.push(ref)}
            data-speed="5"
            src={Parallax1}
            alt=""
          />
          <img
            className={classes.img}
            ref={(ref) => imgRef.current.push(ref)}
            data-speed="8"
            src={Parallax3}
            alt=""
          />
          <img
            className={classes.img}
            ref={(ref) => imgRef.current.push(ref)}
            data-speed="12"
            src={Parallax4}
            alt=""
          />
          <img
            className={classes.img}
            ref={(ref) => imgRef.current.push(ref)}
            data-speed="18"
            src={Parallax5}
            alt=""
          />
          <img className={classes.img} src={Parallax6} alt="" />
          <img className={classes.img} src={Parallax7} alt="" />
          <img className={classes.img} src={Parallax8} alt="" />
          <div className={classes._bottomWrapper}>
            <Typography
              component="div"
              variant="h4"
              gutterBottom
              paragraph
              className={clsx([classes.center, classes.fontType])}
            >
              {t('404_content')}
            </Typography>

            <Button
              variant="contained"
              startIcon={<ArrowBackIcon />}
              className={clsx([
                classes.center,
                classes.btn_goBack,
                classes.fontType
              ])}
            >
              {t('back')}
            </Button>
          </div>
        </div>
      </Hidden>

      {/* -------------------------- Mobile ------------------------------------ */}
      <Hidden smUp>
        <Container maxWidth="xl" disableGutters>
          <div className={clsx(classes.root, classes.fontType)}>
            <img src={Mobile404} className={classes.img} alt="" />
            <Grid
              container
              justify="space-between"
              direction="column"
              alignItems="center"
              className={classes._h90}
            >
              <Grid item className={clsx([classes._404_text])}>
                404
              </Grid>
              <Grid item container justify="center" alignItems="center">
                <Typography
                  component="div"
                  variant="h6"
                  align="center"
                  gutterBottom
                  className={classes.fontType}
                >
                  {t('404_content')}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<ArrowBackIcon />}
                  className={clsx([classes.btn_goBack, classes.fontType])}
                >
                  {t('back')}
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Hidden>
    </>
  );
};

export default withStyles(styles)(PageNotFound);
