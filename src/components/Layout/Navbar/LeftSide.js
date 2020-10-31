import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarAction } from 'redux/sidebar';

const useStyles = makeStyles((theme) => {
  return {
    menu_btn: {
      cursor: 'pointer',
      width: 38,
      height: 38
    },
    text_color: {
      color: theme.palette.primary.textColor,
      transition: 'all .5s linear'
    },
    line_color: {
      backgroundColor: theme.palette.primary.main,
      '&::before,&::after ': {
        backgroundColor: theme.palette.primary.main
      }
    }
  };
});

const LeftSide = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const btnMenuRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    if (btnMenuRef) {
      if (isOpen) {
        btnMenuRef.current.classList.add('open');
      } else {
        btnMenuRef.current.classList.remove('open');
      }
    }
  }, [isOpen]);

  const handleOpenDrawer = () => {
    dispatch(sidebarAction.loadSideBar(!isOpen));
  };

  return (
    <Box className={classes.menu_btn} onClick={handleOpenDrawer}>
      <Box className="menu-btn" ref={btnMenuRef}>
        <div className={`menu-btn__burger ${classes.line_color}`}></div>
      </Box>
    </Box>
  );
};

export default LeftSide;
