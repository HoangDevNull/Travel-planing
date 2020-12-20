import React from 'react';

import Info from './components/Info';
import EmailNotification from './components/EmailNotification';
import DesktopNotification from './components/DesktopNotification';
import Security from './components/Security';

const RightSize = ({ index }) => {
  return (
    <>
      {index === 0 && <Info />}
      {index === 1 && <EmailNotification />}
      {index === 2 && <DesktopNotification />}
      {index === 3 && <Security />}
    </>
  );
};

export default RightSize;
