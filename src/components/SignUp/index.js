import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  makeStyles,
  Grid,
  InputAdornment,
  IconButton,
  Link,
  Container,
  useTheme,
  Paper,
  Hidden
} from '@material-ui/core';

import LoadingButton from 'components/common/LoadingButton';
import CenterDiv from 'components/common/CenterDiv';
import NotifyDialog from 'components/common/NotifyDialog';

import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { useHistory } from 'react-router-dom';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  login_form: {
    padding: 20,
    width: 850,
    height: 600,
    borderRadius: 15,
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      width: '100%'
    }
  },
  icon_btn: {
    cursor: 'default !important',
    borderRadius: 'unset',
    borderRight: `2px solid ${theme.palette.primary.main}`,
    padding: '5px 12px 5px 12px',
    '&:hover': {
      background: 'unset'
    }
  },
  icon_btn_error: {
    borderRight: `2px solid ${theme.palette.error.main}`
  },
  image_wrapper: {
    backgroundImage:
      'url(https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 650,
    width: '100%',
    marginRight: -50,
    zIndex: -1,
    paddingLeft: 80,
    position: 'relative',
    borderRadius: 15
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 650,
    width: '100%',
    background: 'rgba(0,0,0,.4)',
    zIndex: -1,
    borderRadius: 15
  },
  font_bold: {
    fontWeight: 'bold'
  }
}));
const Signup = () => {
  const { t } = useTranslation('auth');
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const loading = useSelector((state) => state.auth.loading);
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const [openDialog, setOpenDialog] = useState(false);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();

    // Validate input
    if (name === 'email') {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      const isValid = re.test(String(value).toLowerCase());
      if (!isValid && value?.length > 0) {
        setError({ ...error, [name]: 'Email nhập vào không hợp lệ' });
      } else if (value.length === 0) {
        setError({ ...error, [name]: 'Thiếu thông tin' });
      } else {
        error?.email !== '' && setError({ ...error, [name]: '' });
      }
    } else if (name === 'password') {
      if ((value.length < 6 || value.length > 32) && value?.length !== 0) {
        setError({ ...error, [name]: 'password-length' });
      } else if (value.length === 0) {
        setError({ ...error, [name]: 'missing-value' });
      } else {
        error?.password !== '' && setError({ ...error, [name]: '' });
      }
    } else if (name === 'repeatPassword') {
      if ((value.length < 6 || value.length > 32) && value?.length !== 0) {
        setError({ ...error, [name]: 'password-length' });
      } else if (value.length === 0) {
        setError({ ...error, [name]: 'missing-value' });
      } else if (value !== inputData.password) {
        setError({ ...error, [name]: 'repeat-password-not-match' });
      } else {
        error?.repeatPassword !== '' && setError({ ...error, [name]: '' });
      }
    } else if (name === 'username') {
      if (value?.length === 0) {
        setError({ ...error, [name]: 'missing-value' });
      } else {
        error[name] !== '' && setError({ ...error, [name]: '' });
      }
    }

    if (value.length > 254) return;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSignup = () => {
    const { email: emailError, password: passwordErr } = error;
    if (emailError || passwordErr) {
      return;
    }

    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleAgree = () => {
    history.push('/signin');
    setOpenDialog(false);
  };

  // Variable for render
  const { username, email, password, repeatPassword } = inputData;
  const {
    username: usernameError,
    email: emailError,
    password: passwordError,
    repeatPassword: repeatPasswordError
  } = error;

  return (
    <>
      <CenterDiv position="absolute" width="100%" mt="10px">
        <Link
          onClick={() => {
            history.push('/');
          }}
          underline="none"
          className={classes.font_bold}
          component="button"
          variant="h4"
        >
          ONISM
        </Link>
      </CenterDiv>

      <Container maxWidth="md" className={classes.root}>
        <Hidden xsDown>
          <Paper elevation={3} className={classes.image_wrapper}>
            <Box className={classes.backdrop} />
            <Grid
              container
              justify="center"
              alignItems="flex-start"
              direction="column"
              spacing={5}
            >
              <Grid item>
                <Box mt="90px">
                  <Typography
                    color="secondary"
                    variant="body2"
                    className={classes.font_bold}
                  >
                    WELLCOME TO ONISM
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box width="80%">
                  <Typography
                    color="secondary"
                    variant="h4"
                    className={classes.font_bold}
                  >
                    Fill the form to become the part of our inspirer
                  </Typography>
                </Box>
                <Box width="70%" height="50px" borderBottom="2px solid #fff" />
              </Grid>
              <Grid item>
                <Box width="80%">
                  <Typography color="secondary" variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse efficitur consequat lectus eu sagittis. Integer
                    mollis nunc in ex faucibus, nec hendrerit mi malesuada. In
                    eu velit id
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Hidden>

        <Paper elevation={3} className={classes.login_form}>
          <Grid container justify="space-around" direction="column" spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                {t('member-signup')}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                placeholder={t('type-your-username')}
                label={t('username')}
                fullWidth
                margin="normal"
                variant="outlined"
                type="text"
                value={username}
                name="username"
                onChange={handleInputChange}
                error={usernameError.length > 1}
                helperText={t(emailError)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        edge="start"
                        className={clsx(
                          classes.icon_btn,
                          usernameError.length > 1 && classes.icon_btn_error
                        )}
                      >
                        <FontAwesomeIcon
                          color={
                            usernameError.length > 1
                              ? theme.palette.error.main
                              : theme.palette.primary.main
                          }
                          size="sm"
                          icon={['far', 'user']}
                        />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                placeholder={t('type-your-email')}
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                type="email"
                value={email}
                name="email"
                onChange={handleInputChange}
                error={emailError.length > 1}
                helperText={t(emailError)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        edge="start"
                        className={clsx(
                          classes.icon_btn,
                          emailError.length > 1 && classes.icon_btn_error
                        )}
                      >
                        <FontAwesomeIcon
                          color={
                            emailError.length > 1
                              ? theme.palette.error.main
                              : theme.palette.primary.main
                          }
                          size="sm"
                          icon={['far', 'envelope']}
                        />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label={t('password')}
                placeholder={t('type-your-password')}
                fullWidth
                margin="normal"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={password}
                name="password"
                onChange={handleInputChange}
                error={passwordError.length > 1}
                helperText={t(passwordError)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        edge="start"
                        className={clsx(
                          classes.icon_btn,
                          passwordError.length > 1 && classes.icon_btn_error
                        )}
                      >
                        <FontAwesomeIcon
                          color={
                            passwordError.length > 1
                              ? theme.palette.error.main
                              : theme.palette.primary.main
                          }
                          size="sm"
                          icon={['fas', 'lock']}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        <FontAwesomeIcon
                          size="sm"
                          icon={['far', showPassword ? 'eye-slash' : 'eye']}
                        />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('repeat-password')}
                placeholder={t('repeat-password')}
                fullWidth
                margin="normal"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={repeatPassword}
                name="repeatPassword"
                onChange={handleInputChange}
                error={repeatPasswordError.length > 1}
                helperText={t(repeatPasswordError)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        edge="start"
                        className={clsx(
                          classes.icon_btn,
                          repeatPasswordError.length > 1 &&
                            classes.icon_btn_error
                        )}
                      >
                        <FontAwesomeIcon
                          color={
                            repeatPasswordError.length > 1
                              ? theme.palette.error.main
                              : theme.palette.primary.main
                          }
                          size="sm"
                          icon={['fas', 'key']}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        <FontAwesomeIcon
                          size="sm"
                          icon={['far', showPassword ? 'eye-slash' : 'eye']}
                        />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Box mt="10px" />
              <LoadingButton
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSignup}
                disabled={
                  passwordError?.length > 1 ||
                  emailError?.length > 1 ||
                  usernameError?.length > 1 ||
                  repeatPasswordError?.length > 1 ||
                  email?.length === 0 ||
                  password?.length === 0 ||
                  username?.length === 0 ||
                  repeatPassword?.length === 0
                }
                loading={loading}
                label={t('signin')}
              />
            </Grid>

            <Grid item xs={12}>
              <Box
                width="100%"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Typography variant="body2">{t('have-account')}</Typography>
                <Link
                  component="button"
                  variant="body1"
                  onClick={() => {
                    history.push('/signin');
                  }}
                >
                  {t('login')}
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <NotifyDialog
        content="sign-up-success"
        open={openDialog}
        onAgree={handleAgree}
        onClose={handleClose}
      />
    </>
  );
};

export default Signup;
