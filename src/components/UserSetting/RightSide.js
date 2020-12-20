import React from 'react';

import Info from './components/Info';
import EmailNotification from './components/EmailNotification';
import DesktopNotification from './components/DesktopNotification';
import Security from './components/Security';
import DeleteAccount from './components/DeleteAccount';
import NotifyDialog from 'components/common/NotifyDialog';

const RightSize = ({ onSelect, index }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleSwicthToDefault = () => {
    onSelect(0);
  };

  return (
    <>
      {index === 0 && <Info onOpenDialog={handleOpenDialog} />}
      {index === 1 && <EmailNotification onOpenDialog={handleOpenDialog} />}
      {index === 2 && <DesktopNotification onOpenDialog={handleOpenDialog} />}
      {index === 3 && <Security onOpenDialog={handleOpenDialog} />}
      {index === 4 && <DeleteAccount onClose={handleSwicthToDefault} />}
      <NotifyDialog
        content="confirm-action"
        open={open}
        onAgree={() => setOpen(false)}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default RightSize;
