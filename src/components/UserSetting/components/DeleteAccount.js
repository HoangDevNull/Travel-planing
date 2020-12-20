import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Grid,
  Button,
  IconButton,
  Typography,
  TextField,
  Box
} from '@material-ui/core';
import { Close, NotificationsActiveOutlined } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { logoutAction } from 'redux/auth';
import { useHistory } from 'react-router-dom';

const DeleteAccount = ({ onClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation('dialog');
  const [open, setOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const email = useSelector((state) => state.auth?.email);

  const handleConfirm = () => {
    setOpen(false);
    dispatch(logoutAction.setLogout());
    history.push('/signin');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Dialog open={open} fullWidth>
      {/* <DialogTitle id="alert-dialog-title">{t("Notification")}</DialogTitle> */}
      <DialogTitle>
        <Grid container direction="row" alignItems="center">
          <Grid container item justify="flex-start" xs={1}>
            <NotificationsActiveOutlined />
          </Grid>
          <Grid container item justify="flex-start" xs={10}>
            {t('notification')}
          </Grid>
          <Grid container item justify="center" xs={1}>
            <IconButton onClick={() => onClose()}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="body2" gutterBottom>
            This action cannot be undone. This will permanently delete the
            <b>{email}</b> repository, wiki, issues, comments, packages,
            secrets, workflow runs, and remove all collaborator associations.
          </Typography>
          <Typography variant="body2">
            Please type <b>{email}</b> to confirm.
          </Typography>

          <Box>
            <TextField
              label={
                <span>
                  Delete account <span style={{ color: 'red' }}>*</span>
                </span>
              }
              placeholder={`type ${email} to confirm.`}
              value={inputValue}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              onChange={handleInputChange}
            />
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleConfirm()}
          color="inherit"
          style={{ color: 'red' }}
          autoFocus
          disabled={inputValue !== email}
          variant="contained"
        >
          {t('delete')}
        </Button>
        <Button
          color="inherit"
          variant="outlined"
          autoFocus
          onClick={() => onClose()}
        >
          {t('cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAccount;
