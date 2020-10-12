import React, { useState } from 'react';
import { Typography, Switch } from '@material-ui/core';
import { theme } from 'redux/theme/actions';
import { useSelector, useDispatch } from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const toggleTheme = (e) => {
    dispatch(theme.loadTheme(e.target.checked));
  };
  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <Switch checked={isDark} onChange={toggleTheme} />
      <Typography variant="h1" align="center" color="primary">
        Home
      </Typography>
    </div>
  );
};

export default Home;
