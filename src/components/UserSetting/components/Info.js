import React, { useState } from 'react';
import {
  makeStyles,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  Avatar,
  TextField,
  Badge,
  IconButton
} from '@material-ui/core';

import Dropzone from 'react-dropzone';

import { useSelector } from 'react-redux';
import CountrySelect from 'components/common/CountrySelect';
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
    border: `1px solid ${theme.palette.secondary.main}`
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
  },
  input: {
    display: 'none'
  }
}));

const Info = ({ onOpenDialog }) => {
  const [fileAvatar, setFileAvatar] = useState(null);
  const [country, setCountry] = useState('VN');
  const classes = useStyles();
  const { email, userProfile } = useSelector((state) => state.auth);

  const handleDropEstimateFile = (file) => {
    let image = file[0];

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setFileAvatar(reader.result.toString());
    };
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

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
              Account Infomation
            </Typography>
          </Box>
        </Grid>

        {/* Avatar */}

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Box mt="20px">
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                badgeContent={
                  <>
                    <input
                      className={classes.input}
                      id="icon-button-file"
                      type="file"
                      accept="image/x-png,image/gif,image/jpeg"
                      onChange={(e) => {
                        handleDropEstimateFile(e.target.files);
                      }}
                    />
                    <label htmlFor="icon-button-file">
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="medium"
                      >
                        <FontAwesomeIcon
                          size="1x"
                          icon={['far', 'arrow-alt-circle-up']}
                        />
                      </IconButton>
                    </label>
                  </>
                }
              >
                <Avatar
                  src={fileAvatar || userProfile?.avatar}
                  className={classes.avatar}
                />
              </Badge>
            </Box>
          </Grid>
          <Grid item>
            <Dropzone onDrop={(file) => handleDropEstimateFile(file)}>
              {({ getRootProps, getInputProps }) => (
                <Box
                  display="flex"
                  flexDirection="column"
                  width="100%"
                  flex="1"
                  mt="10px"
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    {...getRootProps()}
                    className={classes.uploadBox}
                    p="10px"
                  >
                    <input {...getInputProps()} />
                    <Typography variant="body1">
                      Drag & drop your file
                    </Typography>
                  </Box>
                </Box>
              )}
            </Dropzone>
          </Grid>
        </Grid>

        {/* End avatart */}

        <Grid item container justify="space-evenly" spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label={
                <span>
                  Email <span className={classes.required_start}>*</span>
                </span>
              }
              defaultValue={email}
              placeholder="Email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={
                <span>
                  Username <span className={classes.required_start}>*</span>
                </span>
              }
              defaultValue={userProfile?.username}
              placeholder="Username"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={
                <span>
                  ONISM URL <span className={classes.required_start}>*</span>
                </span>
              }
              placeholder="Email"
              defaultValue={`htt://${userProfile?.username}@onism.net`}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CountrySelect
              required
              value={country}
              onChange={handleChangeCountry}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label={
                <span>
                  Description <span className={classes.required_start}>*</span>
                </span>
              }
              placeholder="Description"
              defaultValue={userProfile?.description}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              multiline
              rows="5"
            />
          </Grid>

          {/* End info */}

          <Grid item container justify="space-around">
            <Box width="40%" mb="20px">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                  onOpenDialog();
                }}
              >
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
export default Info;
