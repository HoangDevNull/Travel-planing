import React, { useState } from 'react';
import { makeStyles, ButtonGroup, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => {
  return {
    root: {}
  };
});

const LanguageSelect = () => {
  const { i18n } = useTranslation('common');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  const classes = useStyles();
  return (
    <ButtonGroup variant="text" color="primary">
      <Button onClick={() => handleChangeLanguage('vi')}>VI</Button>
      <Button onClick={() => handleChangeLanguage('en')}>EN</Button>
    </ButtonGroup>
  );
};

export default LanguageSelect;
