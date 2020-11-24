import React, { useState } from 'react';
import { ButtonGroup, Button, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = (theme) => ({
  root: {

  }
});

const LanguageSelect = () => {
  const { i18n } = useTranslation('common');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <ButtonGroup variant="text" color="secondary">
      <Button onClick={() => handleChangeLanguage('vi')}>VI</Button>
      <Button onClick={() => handleChangeLanguage('en')}>EN</Button>
    </ButtonGroup>
  );
};

export default LanguageSelect;
