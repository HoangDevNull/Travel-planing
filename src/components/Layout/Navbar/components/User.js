import React from 'react';
import {
  Typography,
  makeStyles,
  Avatar,
  Button,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Grow,
  Paper,
  ListItemIcon,
  ListItemText,
  IconButton,
  Hidden
} from '@material-ui/core';

import { logoutAction } from 'redux/auth';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  user_name: {
    maxWidth: 120,
    textTransform: 'none !important'
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
}));

const User = () => {
  const classes = useStyles();
  const { t } = useTranslation('navbar');
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn, userProfile } = useSelector((state) => state.auth);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleLogout = () => {
    dispatch(logoutAction.setLogout());
    setTimeout(() => {
      history.push('/signin');
    }, 1000);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Hidden xsDown>
        <Button
          color="inherit"
          endIcon={
            <Avatar
              variant="rounded"
              alt="Remy Sharp"
              src={userProfile?.avatar}
              className={classes.small}
            />
          }
          onClick={handleToggle}
          ref={anchorRef}
        >
          <Typography
            className={classes.user_name}
            color="secondary"
            noWrap
            variant="body1"
          >
            {t('hello') + ', ' + userProfile?.username}
          </Typography>
        </Button>
      </Hidden>

      <Hidden smUp>
        <IconButton color="secondary" onClick={handleToggle} ref={anchorRef}>
          <FontAwesomeIcon size="xs" icon={['far', 'user']} />
        </IconButton>
      </Hidden>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                {isLoggedIn ? (
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={() => {
                        history.push('/profile');
                      }}
                    >
                      <ListItemIcon>
                        <FontAwesomeIcon
                          size="sm"
                          icon={['fas', 'user-circle']}
                        />
                      </ListItemIcon>
                      <ListItemText primary={t('profile')} />
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        history.push('/setting');
                      }}
                    >
                      <ListItemIcon>
                        <FontAwesomeIcon size="sm" icon={['fas', 'lock']} />
                      </ListItemIcon>
                      <ListItemText primary={t('account')} />
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <FontAwesomeIcon
                          size="sm"
                          icon={['fas', 'sign-out-alt']}
                        />
                      </ListItemIcon>
                      <ListItemText primary={t('logout')} />
                    </MenuItem>{' '}
                  </MenuList>
                ) : (
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={() => {
                        history.push('/signin');
                      }}
                    >
                      <ListItemIcon>
                        <FontAwesomeIcon
                          size="sm"
                          icon={['fas', 'user-circle']}
                        />
                      </ListItemIcon>
                      <ListItemText primary={t('login')} />
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        history.push('/signup');
                      }}
                    >
                      <ListItemIcon>
                        <FontAwesomeIcon size="sm" icon={['fas', 'lock']} />
                      </ListItemIcon>
                      <ListItemText primary={t('sign-up')} />
                    </MenuItem>
                  </MenuList>
                )}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default User;
