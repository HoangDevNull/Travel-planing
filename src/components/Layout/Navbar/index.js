import React from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  CssBaseline,
  Container,
  makeStyles,
  Hidden,
  Typography,
  Box
} from '@material-ui/core';
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import BackToTop from './components/BackToTop';
import SideBar from './Sidebar';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      justifyContent: 'space-between'
    },
    bg_appBar: {
      backgroundColor: theme.palette.type.includes('dark') ? '#333' : '#FFF'
    },
    trigger_appbar: {
      backgroundColor: 'transparent'
    },
    logo: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: ' translate(-50%, -50%)',
      cursor: 'pointer',
      color: theme.palette.primary.main,
      fontFamily: `'Aclonica', sans-serif`,
      textTransform: 'upperCase',
      letterSpacing: 5,
      fontWeight: 'bold'
    }
  };
});

const Navbar = () => {
  const classes = useStyles();
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
          colorPrimary: trigger ? classes.bg_appBar : classes.trigger_appbar
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters classes={{ root: classes.root }}>
            <Box>
              <LeftSide />
            </Box>
            <Box className={classes.logo}>
              <Typography variant="h4">Onism</Typography>
            </Box>
            <Box>
              <RightSide />
            </Box>

            <Hidden mdUp>
              <SideBar />
            </Hidden>
          </Toolbar>
        </Container>
        {/* <Container maxWidth="xl">
          <LinearDeterminate />
        </Container> */}
      </AppBar>
      <Toolbar />

      <BackToTop trigger={trigger} />
    </React.Fragment>
  );
};

export default Navbar;
