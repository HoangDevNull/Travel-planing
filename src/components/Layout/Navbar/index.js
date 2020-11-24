import React from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  CssBaseline,
  Container,
  makeStyles,
  Typography,
  Box
} from '@material-ui/core';
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import BackToTop from './components/BackToTop';
import SideBar from './Sidebar';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      justifyContent: 'space-between'
    },
    bg_appBar: {
      backgroundColor: theme.palette.type.includes('dark') ? '#333' : '#FFF'
    },
    trigger_appbar: {
      backgroundColor: 'transparent',
      transition: 'all .5s ease-in-out'
    },
    logo: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: ' translate(-50%, -50%)',
      cursor: 'pointer'
    },
    logo_text: {
      fontFamily: `'Aclonica', sans-serif`,
      textTransform: 'upperCase',
      letterSpacing: 5,
      fontWeight: 'bold',
      transition: 'font-size 2s',
      color: theme.palette.primary.bnw
    },
    pv_20: {
      padding: '20px 0px'
    },
    pv_0: {
      padding: '0px 0px'
    }
  };
});

const Navbar = () => {
  const classes = useStyles();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500
  });
  return (
    <React.Fragment>
      <div id="back-to-top-anchor"></div>
      <CssBaseline />
      <AppBar
        elevation={trigger ? 3 : 0}
        classes={{
          root: trigger ? classes.pv_0 : classes.pv_20,
          colorPrimary:
            trigger || isOpen ? classes.bg_appBar : classes.trigger_appbar
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters classes={{ root: classes.root }}>
            <Box>
              <LeftSide />
            </Box>
            <Box className={classes.logo}>
              <Typography
                variant={trigger ? 'h5' : 'h4'}
                className={classes.logo_text}
              >
                Onism
              </Typography>
            </Box>
            <Box>
              <RightSide />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />

      <SideBar />
      <BackToTop trigger={trigger} />
    </React.Fragment>
  );
};

export default Navbar;
