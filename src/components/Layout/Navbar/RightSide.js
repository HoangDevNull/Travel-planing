import React from 'react';

import { Button, makeStyles, Box, Hidden } from '@material-ui/core';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import LanguageSelect from './components/LanguageSelect';

import { useHistory } from 'react-router-dom';
import User from './components/User';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    custom_button: {
      // color: theme.palette.primary.textColor,
      textTransform: 'unset',
      minWidth: 100,
      marginRight: 15,
      [theme.breakpoints.down('sm')]: {
        marginRight: 10,
        minWidth: 'unset'
      }
    }
  };
});

const RightSide = () => {
  const { t } = useTranslation('navbar');
  const classes = useStyles();
  const history = useHistory();

  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);

  return (
    <Box className={classes.root}>
      <Hidden smDown>
        {isLoggedIn ? (
          <User />
        ) : (
          <>
            <Button
              variant="outlined"
              color="secondary"
              className={clsx([classes.custom_button])}
              onClick={() => {
                history.push('/signin');
              }}
            >
              {t('login')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.custom_button}
              onClick={() => {
                history.push('/signup');
              }}
            >
              {t('sign-up')}
            </Button>
          </>
        )}
      </Hidden>
      <Hidden mdUp>
        <User />
      </Hidden>
      <Box>
        <LanguageSelect />
      </Box>
    </Box>
  );
};

export default React.memo(RightSide);
