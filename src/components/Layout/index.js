import React from 'react';

import { withStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const styles = (theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.3em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.type.includes('dark') ? '#FFF' : '#333',
      outline: 'none'
    }
  }
});

function Layout({ children }) {
  const { pathname } = useLocation();

  const isShowNavbar =
    pathname === '/' ||
    pathname === '/home' ||
    pathname === '/videos' ||
    pathname === '/stories' ||
    pathname === '/story-detail' ||
    pathname === '/profile' ||
    pathname === '/feature-video-detail';

  if (!isShowNavbar) return <> {children} </>;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default withStyles(styles)(Layout);
