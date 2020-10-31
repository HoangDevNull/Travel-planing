import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minWidth: 500
    },
    nav_item: {
      textDecoration: 'unset',
      color: theme.palette.primary.textColor,
      fontSize: 14,
      fontWeight: '500',
      textTransform : "uppercase",
      cursor: 'pointer',
      position: 'relative',
      padding: 5,
      transition: 'all .5s ease-in-out',
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        width: '0%',
        height: 2,
        backgroundColor: theme.palette.primary.main,
        transition: 'all .5s ease-in-out'
      },
      '&:hover': {
        color: theme.palette.primary.main,
        '&:before': {
          width: '50%'
        }
      }
    },
    active: {
      color: theme.palette.primary.main,
      '&:before': {
        width: '100%'
      }
    }
  };
});

const NavItem = () => {
  const { t } = useTranslation('navbar');

  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <NavLink
          activeClassName={classes.active}
          className={classes.nav_item}
          to="/home"
        >
          {t('home')}
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink className={classes.nav_item} to="/top">
          {t('top-des')}
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink className={classes.nav_item} to="/about">
          {t('about')}
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink className={classes.nav_item} to="/partner">
          {t('partner')}
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default NavItem;
