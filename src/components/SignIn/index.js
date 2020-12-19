import React, { useState } from 'react';
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
  Hidden
} from '@material-ui/core';

import LoadingButton from 'components/common/LoadingButton';

import { loginAction } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';

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
    height: 480,
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
  image_wrapper: {
    backgroundImage:
      'url(https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 550,
    width: '100%',
    marginLeft: -50,
    zIndex: -1,
    paddingLeft: 80,
    position: 'relative'
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 550,
    width: '100%',
    background: 'rgba(0,0,0,.4)',
    zIndex: -1
  },
  font_bold: {
    fontWeight: 'bold'
  }
}));
const LeftSide = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState({
    email: '',
    password: ''
  });

  const [isRememberMe, setIsRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    // Validate
    if (name === 'email') {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      const isValid = re.test(String(value).toLowerCase());
      if (!isValid && value?.length > 0) {
        setError({ ...error, [name]: 'Email nhập vào không hợp lệ' });
      } else {
        error?.email !== '' && setError({ ...error, [name]: '' });
      }
      if (value.length > 254) return;
    } else {
      // Minimum password length have to be 6 character
      if ((value.length < 6 || value.length > 32) && value?.length !== 0) {
        setError({ ...error, [name]: 'Mật khẩu phải có từ 6-32 ký tự' });
      } else {
        error?.password !== '' && setError({ ...error, [name]: '' });
      }
      if (value.length > 32) return;
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
    <Container maxWidth="md" className={classes.root}>
      <Paper elevation={3} className={classes.login_form}>
        <Grid container justify="space-around" direction="column" spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              MEMBER LOGIN
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              placeholder="Type your email"
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              type="email"
              value={email}
              name="email"
              onChange={handleInputChange}
              error={emailError.length > 1}
              helperText={emailError}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start" className={classes.icon_btn}>
                      <FontAwesomeIcon
                        color={theme.palette.primary.main}
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
              label="Password"
              placeholder="Type your password"
              fullWidth
              margin="normal"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start" className={classes.icon_btn}>
                      <FontAwesomeIcon
                        color={theme.palette.primary.main}
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
              value={password}
              name="password"
              onChange={handleInputChange}
              error={passwordError.length > 1}
              helperText={passwordError}
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt="20px" />
            <Grid container justify="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isRememberMe}
                    onChange={(e) => setIsRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember me"
              />

              <Box mt="10px">
                <Link href="#">Forgot password?</Link>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box mt="20px" />
            <LoadingButton
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              disabled={
                passwordError?.length > 1 ||
                emailError?.length > 1 ||
                email?.length === 0 ||
                password?.lenght === 0
              }
              loading={loading}
              label="Login"
            />
          </Grid>
        </Grid>
      </Paper>
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
              <Box mt="65px" className={classes.font_bold}>
                <Typography color="secondary" variant="body2">
                  WELLCOME BACK
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
                  Find your next adventure now
                </Typography>
              </Box>
              <Box width="70%" height="50px" borderBottom="2px solid #fff" />
            </Grid>
            <Grid item>
              <Box width="80%">
                <Typography color="secondary" variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse efficitur consequat lectus eu sagittis. Integer
                  mollis nunc in ex faucibus, nec hendrerit mi malesuada. In eu
                  velit id
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Hidden>
    </Container>
  );
};

export default LeftSide;
