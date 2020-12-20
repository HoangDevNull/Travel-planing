import React, { useState } from 'react';
import {
  makeStyles,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup
} from '@material-ui/core';

import { useSelector } from 'react-redux';

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
  }
}));

const DesktopNotification = ({ onOpenDialog }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    action_1: true,
    action_2: false,
    action_3: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { action_1, action_2, action_3 } = state;
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
              Desktop notification
            </Typography>
          </Box>
        </Grid>

        <Grid item container justify="center" alignItems="center">
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="div">
              Actionable Desktop Notifications
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={action_1}
                    onChange={handleChange}
                    name="action_1"
                    color="primary"
                  />
                }
                label="        Sends me a direct message"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={action_2}
                    onChange={handleChange}
                    name="action_2"
                    color="primary"
                  />
                }
                label="        Send notification when project is up"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={action_3}
                    onChange={handleChange}
                    name="action_3"
                    color="primary"
                  />
                }
                label="       Send notification when you have an comment in your post"
              />
            </FormGroup>
          </FormControl>
        </Grid>

        {/* Action */}
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
    </Paper>
  );
};
export default DesktopNotification;
