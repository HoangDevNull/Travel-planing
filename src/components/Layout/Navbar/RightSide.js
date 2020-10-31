import React from 'react';

import { Button, makeStyles, Box, Hidden } from '@material-ui/core';
import clsx from 'clsx';
import NavItem from './components/NavItem';
import { useTranslation } from 'react-i18next';
import LanguageSelect from './components/LanguageSelect';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        marginRight: 50
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: 0
      }
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

  return (
    <Box className={classes.root}>
      <Box>
        <Button
          variant="outlined"
          color="primary"
          className={clsx([classes.custom_button])}
        >
          {t('login')}
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.custom_button}
        >
          {t('sign-up')}
        </Button>
      </Box>
      <Box>
        <LanguageSelect />
      </Box>
    </Box>
  );
};

export default RightSide;
