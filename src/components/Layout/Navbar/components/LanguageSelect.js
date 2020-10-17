import React, { useState } from 'react';
import { Box, makeStyles, MenuItem, Select } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: 'absolute',
      top: 15,
      right: 15,
      [theme.breakpoints.down('sm')]: {
        position: 'static',
        display: 'flex',
        alignItems: 'center'
      }
    },
    select: {
      fontSize: 13,
      color: theme.palette.primary.main,
      '&:focus,&:active,&:hover': {
        boxShadow: 'none',
        border: 'none',
        background: 'none'
      }
    },
    submenu: {
      color: theme.palette.primary.main,
      fontSize: 13
    }
  };
});

const LanguageSelect = () => {
  const { i18n } = useTranslation('common');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeLanguage = (e) => {
    const language = e.target.value;
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Select
          id="select-language"
          value={currentLanguage}
          onChange={handleChangeLanguage}
          disableUnderline
          classes={{
            select: classes.select
          }}
        >
          <MenuItem className={classes.submenu} value="vi">
            VI
          </MenuItem>
          <MenuItem className={classes.submenu} value="en">
            EN
          </MenuItem>
        </Select>
      </Box>
    </div>
  );
};

export default LanguageSelect;
