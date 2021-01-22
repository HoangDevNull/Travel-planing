import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Typography,
  makeStyles,
  Grid,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Link,
  Container,
  useTheme,
  Paper,
  Hidden,
  Snackbar
} from '@material-ui/core';

import LoadingButton from 'components/common/LoadingButton';
import CenterDiv from 'components/common/CenterDiv';

import { loginAction } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { useHistory } from 'react-router-dom';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Close } from '@material-ui/icons';

library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 100px)'
  },
  signup_form: {
    padding: 20,
    width: 850,
    height: 500,
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
    height: 600,
    width: '100%',
    marginLeft: -50,
    zIndex: -1,
    paddingLeft: 80,
    position: 'relative',
    borderRadius: 15
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 600,
    width: '100%',
    background: 'rgba(0,0,0,.4)',
    zIndex: -1,
    borderRadius: 15
  },
  font_bold: {
    fontWeight: 'bold'
  },
  close: {
    padding: theme.spacing(0.5)
  }
}));
const Signin = () => {
  const { t } = useTranslation('auth');
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const { error: loginError, isLoggedIn } = useSelector((state) => state.auth);

  const loading = useSelector((state) => state.auth.loading);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(true);
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState({
    email: '',
    password: ''
  });

  const [isRememberMe, setIsRememberMe] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn, history]);

  const handleInputChange = (e) => {
    if (loginError) {
      dispatch(loginAction.setError(null));
    }
    const name = e.target.name;
    const value = e.target.value.trim();
    // Validate
    if (name === 'email') {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      const isValid = re.test(String(value).toLowerCase());
      if (!isValid && value?.length > 0) {
        setError({ ...error, [name]: 'invalid-email' });
      } else {
        error?.email !== '' && setError({ ...error, [name]: '' });
      }
      if (value.length > 254) return;
    } else {
      // Minimum password length have to be 6 character
      if ((value.length < 6 || value.length > 32) && value?.length !== 0) {
        setError({ ...error, [name]: 'password-length' });
      } else {
        error?.password !== '' && setError({ ...error, [name]: '' });
      }
      if (value.length > 32) return;
    }

    if (value.length === 0) {
      setError({ ...error, [name]: 'missing-value' });
    }

    setInputData({ ...inputData, [name]: value });
  };

  const handleLogin = () => {
    const { email: emailError, password: passwordErr } = error;
    if (emailError || passwordErr) {
      return;
    }

    const { email, password } = inputData;
    dispatch(loginAction.loadLogin({ email, password }));
  };

  // Variable for render
  const { email, password } = inputData;
  const { email: emailError, password: passwordError } = error;

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        action={
          <IconButton
            color='inherit'
            className={classes.close}
            onClick={() => setOpen(false)}
          >
            <Close />
          </IconButton>
        }
        message='User test:  hoang@gmail.com  or  trong@gmail.com or tham@gmail.com with password abcd1234'
      />

      <CenterDiv position='relative' width='100%' mt='10px'>
        <Link
          onClick={() => {
            history.push('/');
          }}
          underline='none'
          className={classes.font_bold}
          component='button'
          variant='h4'
        >
          ONISM
        </Link>
      </CenterDiv>

      <Container maxWidth='md' className={classes.root}>
        <Paper elevation={3} className={classes.signup_form}>
          <Grid container justify='space-around' direction='column' spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h5' align='center'>
                {t('member-login')}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                placeholder={t('type-your-email')}
                label='Email'
                fullWidth
                margin='normal'
                variant='outlined'
                type='email'
                value={email}
                name='email'
                onChange={handleInputChange}
                error={emailError.length > 1}
                helperText={t(emailError)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <IconButton
                        edge='start'
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
                          size='sm'
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
                margin='normal'
                variant='outlined'
                type={showPassword ? 'text' : 'password'}
                value={password}
                name='password'
                onChange={handleInputChange}
                error={passwordError.length > 1}
                helperText={t(passwordError)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <IconButton
                        edge='start'
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
                          size='sm'
                          icon={['fas', 'lock']}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge='end'
                      >
                        <FontAwesomeIcon
                          size='sm'
                          icon={['far', showPassword ? 'eye-slash' : 'eye']}
                        />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box mt='20px' />
              <Grid container justify='space-between'>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isRememberMe}
                      onChange={(e) => setIsRememberMe(e.target.checked)}
                      color='primary'
                    />
                  }
                  label={t('remember-me')}
                />

                <Box mt='10px'>
                  <Link href='#'>{t('forgot-password')}</Link>
                </Box>
              </Grid>
            </Grid>
            {loginError && (
              <Box ml={2}>
                <Typography variant='caption' color='error'>
                  {t(loginError)}
                </Typography>
              </Box>
            )}
            <Grid item xs={12}>
              <Box mt='10px' />
              <LoadingButton
                fullWidth
                variant='contained'
                color='primary'
                onClick={handleLogin}
                disabled={
                  passwordError?.length > 1 ||
                  emailError?.length > 1 ||
                  email?.length === 0 ||
                  password?.lenght === 0
                }
                loading={loading}
                label={t('login')}
              />
            </Grid>

            <Grid item xs={12}>
              <Box
                width='100%'
                display='flex'
                justifyContent='space-evenly'
                alignItems='center'
              >
                <Typography variant='body2'>
                  {t('dont-have-account')}
                </Typography>
                <Link
                  component='button'
                  variant='body1'
                  onClick={() => {
                    history.push('/signup');
                  }}
                >
                  {t('signup')}
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Hidden xsDown>
          <Paper elevation={3} className={classes.image_wrapper}>
            <Box className={classes.backdrop} />
            <Grid
              container
              justify='center'
              alignItems='flex-start'
              direction='column'
              spacing={5}
            >
              <Grid item>
                <Box mt='90px'>
                  <Typography
                    color='secondary'
                    variant='body2'
                    className={classes.font_bold}
                  >
                    WELLCOME BACK
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box width='80%'>
                  <Typography
                    color='secondary'
                    variant='h4'
                    className={classes.font_bold}
                  >
                    Find your next adventure now
                  </Typography>
                </Box>
                <Box width='70%' height='50px' borderBottom='2px solid #fff' />
              </Grid>
              <Grid item>
                <Box width='80%'>
                  <Typography color='secondary' variant='body1'>
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
      </Container>
    </>
  );
};

export default Signin;
