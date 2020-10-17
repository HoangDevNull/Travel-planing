import React from 'react';
import { Box, makeStyles, IconButton, Tooltip } from '@material-ui/core';
import { theme } from 'redux/theme/actions';
import { useSelector, useDispatch } from 'react-redux';

import { Brightness4Rounded, Brightness7Rounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: 'absolute',
      top: 8,
      right: 40,
      [theme.breakpoints.down('sm')]: {
        position: 'static',
        marginLeft : 2
      }
    }
  };
});

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const toggleTheme = () => {
    dispatch(theme.loadTheme(!isDark));
  };
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Tooltip title="Toggle light/dark theme">
          <IconButton onClick={toggleTheme}>
            {isDark ? <Brightness4Rounded /> : <Brightness7Rounded />}
          </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
};

export default ThemeSelect;
