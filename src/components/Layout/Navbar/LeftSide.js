import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarAction } from 'redux/sidebar';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      cursor: 'pointer',
      width: 38,
      height: 38
    },
    disabled: {
      pointerEvents: 'none'
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
      '&:hover > .menu_line': {
        width: 38
      },
      [theme.breakpoints.down('xs')]: {
        '&:hover > .menu_line': {
          width: 28
        }
      }
    },

    menu_btn__burger: {
      width: 25,
      height: 2,
      borderRadius: 5,
      transition: 'width 0.1s linear, all 0.3s ease-in-out',
      backgroundColor: '#fff',
      [theme.breakpoints.down('xs')]: {
        width: 15
      },
      '&::before,&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        width: 38,
        height: 2,
        borderRadius: 5,
        transition: 'all 0.7s ease-in-out',
        backgroundColor: '#fff',
        [theme.breakpoints.down('xs')]: {
          width: 28
        }
      },
      '&::before': {
        transform: 'translateY(-10px)',
        [theme.breakpoints.down('xs')]: {
          transform: 'translateY(-7px)'
        }
      },
      '&::after': {
        transform: 'translateY(10px)',
        [theme.breakpoints.down('xs')]: {
          transform: 'translateY(7px)'
        }
      }
    },
    burger_open: {
      transform: 'translateX(-50px)',
      background: 'transparent',
      '&::before': {
        transform: 'rotate(45deg) translate(35px, -35px)'
      },
      '&::after': {
        transform: 'rotate(-45deg) translate(35px, 35px)'
      }
    },

    text_color: {
      color: theme.palette.primary.textColor,
      transition: 'all .5s linear'
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
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [isOpen]);

  const handleOpenDrawer = () => {
    dispatch(sidebarAction.loadSideBar(!isOpen));
  };

  return (
    <Box className={clsx([classes.root])} onClick={handleOpenDrawer}>
      <Box className={classes.menu_btn} ref={btnMenuRef}>
        <Box
          className={`${clsx([
            classes.menu_btn__burger,
            isOpen && classes.burger_open
          ])} menu_line`}
        />
      </Box>
    </Box>
  );
};

export default LeftSide;
