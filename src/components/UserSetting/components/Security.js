import React, { useState } from 'react';
import {
  makeStyles,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  useTheme,
  TextField,
  InputAdornment,
  IconButton
} from '@material-ui/core';

import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, far, fas);
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  font_bold: {
    fontWeight: 'bold'
  },
  avatar: {
    width: 150,
    height: 150,
    border: `5px solid ${theme.palette.primary.main}`
  },
  uploadBox: {
    width: '100%',
    height: '100%',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    cursor: 'pointer',
    border: '1px dashed #707070'
  },
  fileUpload: {
    width: '100%',
    height: '100%',
    margin: '0px 5px',
    padding: '0px 10px',
    border: '1px solid #E9E9F0'
  },
  required_start: {
    color: 'red'
  }
}));

const Security = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const userProfile = useSelector((state) => state.auth?.username);

  const [inputData, setInputData] = useState({
    oldPassword: '',
    password: '',
    repeatPassword: ''
  });
  const [error, setError] = useState({
    oldPassword: '',
    password: '',
    repeatPassword: ''
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    let isValid = true;

    if (name === 'oldPassword') {
      if (value !== 'abcd1234' && value.length !== 0) {
        setError({ ...error, [name]: 'Old password is incorrect' });
        isValid = false;
      } else {
        setError({ ...error, [name]: '' });
      }
    } else if (name === 'repeatPassword') {
      const password = inputData?.password;
      if (password !== value) {
        setError({
          ...error,
          [name]: 'New password does not match to current password'
        });
        isValid = false;
      }
    } else {
      if ((value.length < 6 || value.length > 32) && value?.length !== 0) {
        setError({
          ...error,
          [name]:
            'Password must be 6-32 characters and include both numbers and letters'
        });
        isValid = false;
      }
    }

    if (value.length === 0) {
      setError({ ...error, [name]: 'Required' });
      isValid = false;
    }

    if (error[name] !== '' && isValid) {
      setError({ ...error, [name]: '' });
    }

    setInputData({ ...inputData, [name]: value });
  };

  const { oldPassword, password, repeatPassword } = inputData;
  const {
    oldPassword: oldPasswordError,
    password: passwordError,
    repeatPassword: repeatPasswordError
  } = error;

  return (
    <Paper variant="outlined" square className={classes.root}>
      <Grid
        container
        direction="column"
        spacing={3}
        className={classes.wrapper}
      >
        <Grid item>
          <Box mt="20px" mx="auto">
            <Typography
              gutterBottom
              className={classes.font_bold}
              align="center"
              variant="h6"
            >
              Security
            </Typography>
          </Box>
        </Grid>

        <Grid item container justify="space-evenly" spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              label={
                <span>
                  Old password <span className={classes.required_start}>*</span>
                </span>
              }
              placeholder="Old password"
              fullWidth
              margin="normal"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={oldPassword}
              name="oldPassword"
              onChange={handleInputChange}
              error={oldPasswordError.length > 1}
              helperText={oldPasswordError}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      edge="start"
                      className={
                        oldPasswordError.length > 1
                          ? classes.icon_btn_error
                          : null
                      }
                    >
                      <FontAwesomeIcon
                        color={
                          oldPasswordError.length > 1
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
          <Grid item xs={12} sm={6}>
            <TextField
              label={
                <span>
                  New password <span className={classes.required_start}>*</span>
                </span>
              }
              placeholder="New password"
              fullWidth
              margin="normal"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={password}
              name="password"
              onChange={handleInputChange}
              error={passwordError.length > 1}
              helperText={passwordError}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      edge="start"
                      className={
                        passwordError.length > 1 ? classes.icon_btn_error : null
                      }
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
          <Grid item xs={12} sm={6}>
            <TextField
              label={
                <span>
                  Repeat new password
                  <span className={classes.required_start}>*</span>
                </span>
              }
              placeholder="Repeat new password"
              fullWidth
              margin="normal"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={repeatPassword}
              name="repeatPassword"
              onChange={handleInputChange}
              error={repeatPasswordError.length > 1}
              helperText={repeatPasswordError}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      edge="start"
                      className={
                        repeatPasswordError.length > 1
                          ? classes.icon_btn_error
                          : null
                      }
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

          {/* End info */}

          <Grid item container justify="space-around">
            <Box width="40%" mb="20px">
              <Button fullWidth variant="contained" color="primary">
                Save
              </Button>
            </Box>
            <Box width="40%" mb="20px">
              <Button fullWidth variant="outlined" color="primary">
                cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Security;
