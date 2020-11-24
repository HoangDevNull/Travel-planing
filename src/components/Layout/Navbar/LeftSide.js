import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarAction } from 'redux/sidebar';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      cursor: 'pointer',
      width: 38,
      height: 38
    },
    menu_btn: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'fit-content',
      height: '100%',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      marginBottom: 8
    },
    menu_btn__burger: {
      width: 30,
      height: 2,
      borderRadius: 5,
      transition: 'width 0.1s linear, all 0.3s ease-in-out',
      backgroundColor: theme.palette.primary.bnw,
      '&:before,&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        width: 38,
        height: 2,
        borderRadius: 5,
        transition: 'all 0.3s ease-in-out',
        backgroundColor: theme.palette.primary.bnw
      }
    },
    text_color: {
      color: theme.palette.primary.textColor,
      transition: 'all .5s linear'
    },
    line_color: {
      backgroundColor: theme.palette.primary.bnw,
      '&::before,&::after ': {
        backgroundColor: theme.palette.primary.bnw
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
    <Box className={classes.root} onClick={handleOpenDrawer}>
      <Box className={classes.menu_btn} ref={btnMenuRef}>
        <div className={classes.menu_btn__burger}></div>
      </Box>
    </Box>
  );
};

export default LeftSide;
