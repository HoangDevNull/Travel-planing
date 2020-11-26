import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Hidden,
  IconButton,
  Typography
} from '@material-ui/core';

import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
  const { i18n } = useTranslation('common');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Hidden xsDown>
        <ButtonGroup variant="text" color="secondary">
          <Button onClick={() => handleChangeLanguage('vi')}>VI</Button>
          <Button onClick={() => handleChangeLanguage('en')}>EN</Button>
        </ButtonGroup>
      </Hidden>
      <Hidden smUp>
        <IconButton
          size="small"
          color="secondary"
          value="check"
          onClick={() =>
            handleChangeLanguage(currentLanguage.includes('en') ? 'vi' : 'en')
          }
        >
          <Typography variant="button">{currentLanguage}</Typography>
        </IconButton>
      </Hidden>
    </>
  );
};

export default React.memo(LanguageSelect);
