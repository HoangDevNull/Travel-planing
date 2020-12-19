import React from 'react';

import { Button, makeStyles, Box, Hidden, IconButton } from '@material-ui/core';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import LanguageSelect from './components/LanguageSelect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import User from './components/User';

library.add(fab, far, fas);

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
        <IconButton color="secondary">
          <FontAwesomeIcon size="xs" icon={['far', 'user']} />
        </IconButton>
      </Hidden>
      <Box>
        <LanguageSelect />
      </Box>
    </Box>
  );
};

export default React.memo(RightSide);
