import React from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  CssBaseline,
  Slide,
  Container,
  makeStyles
} from '@material-ui/core';
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import BackToTop from './BackToTop';

const useStyles = makeStyles((theme) => {
  return {
    bgTransparent: {
      backgroundColor: 'transparent'
    }
  };
});

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    // disableHysteresis: true,
    threshold: 100
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = (props) => {
  return (
    <React.Fragment>
      <div id="back-to-top-anchor"></div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Container>
            <Toolbar disableGutters>
              <LeftSide />
              <RightSide />
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      <BackToTop />
    </React.Fragment>
  );
};

export default Navbar;
