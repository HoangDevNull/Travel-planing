import React from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  CssBaseline,
  Container,
  makeStyles,
  Hidden
} from '@material-ui/core';
import RightSide from './components/RightSide';
import LeftSide from './components/LeftSide';
import BackToTop from './components/BackToTop';
import LanguageSelect from './components/LanguageSelect';

const useStyles = makeStyles((theme) => {
  return {
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.type.includes('dark') ? '#FFF' : '#333',
        outline: 'none'
      }
    },
    bg_appBar: {
      backgroundColor: theme.palette.type.includes('dark') ? '#333' : '#FFF'
    },
    trigger_appbar: {
      backgroundColor: 'transparent'
    }
  };
});

const Navbar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  return (
    <React.Fragment>
      <div id="back-to-top-anchor"></div>
      <CssBaseline />
      <AppBar
        elevation={trigger ? 3 : 0}
        classes={{
          colorPrimary: trigger ? classes.bg_appBar : classes.trigger_appbar
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <LeftSide />
            <RightSide />
            <Hidden mdUp>
              <LanguageSelect />
            </Hidden>
          </Toolbar>
        </Container>
        <Hidden smDown>
          <LanguageSelect />
        </Hidden>
      </AppBar>
      <Toolbar />

      <BackToTop trigger={trigger} />
    </React.Fragment>
  );
};

export default Navbar;
