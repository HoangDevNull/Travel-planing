import React from 'react';
import { Box, makeStyles, Button, Tooltip } from '@material-ui/core';
import { theme } from 'redux/theme/actions';
import { useSelector, useDispatch } from 'react-redux';

import { Brightness4Rounded, Brightness7Rounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => {
  return {
    root: {}
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
          <Button
            onClick={toggleTheme}
            endIcon={isDark ? <Brightness4Rounded /> : <Brightness7Rounded />}
          >
            Toggle theme
          </Button>
        </Tooltip>
      </Box>
    </div>
  );
};

export default ThemeSelect;
