import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Hidden, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1
    },
    logo: {
      color: theme.palette.primary.main,
      fontFamily: `'Orbitron', sans-serif`,
      textTransform: 'upperCase',
      letterSpacing: 5,
      fontWeight: 'bold'
    },
    buttonBase: {
      marginLeft: -12
    },
    line_color: {
      backgroundColor: theme.palette.type.includes('dark') ? '#FFF' : '#4D4F5C',
      '&::before,&::after ': {
        backgroundColor: theme.palette.type.includes('dark') ? '#FFF' : '#4D4F5C'
      }
    }
  };
});

const LeftSide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnMenuRef = useRef(null);
  const classes = useStyles();

  const handleOpenDrawer = () => {
    if (btnMenuRef) {
      console.log('click', { isOpen, btnMenuRef });
      if (isOpen) {
        btnMenuRef.current.classList.remove('open');
      } else {
        btnMenuRef.current.classList.add('open');
      }
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Typography className={classes.logo} variant="h6">
          Travel
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          size="medium"
          className={classes.buttonBase}
          onClick={handleOpenDrawer}
        >
          <div className="menu-btn" ref={btnMenuRef}>
            <div className={`menu-btn__burger ${classes.line_color}`}></div>
          </div>
        </IconButton>
      </Hidden>
    </div>
  );
};

export default LeftSide;
