import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarAction } from 'redux/sidebar';

const useStyles = makeStyles((theme) => {
  return {
    menu_btn: {
      cursor: 'pointer',
      width: 40,
      height: 40
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
        btnMenuRef.current.classList.remove('open');
      } else {
        btnMenuRef.current.classList.add('open');
      }
    }
  }, [isOpen]);

  const handleOpenDrawer = () => {
    dispatch(sidebarAction.loadSideBar(!isOpen));
  };

  return (
    <Box pt="5px" className={classes.menu_btn} onClick={handleOpenDrawer}>
      <Box className="menu-btn" ml="4px" ref={btnMenuRef}>
        <div className={`menu-btn__burger ${classes.line_color}`}></div>
      </Box>
    </Box>
  );
};

export default LeftSide;
