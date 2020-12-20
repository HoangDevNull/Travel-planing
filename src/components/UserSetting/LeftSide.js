import React from 'react';
import { makeStyles, Button, Grid, Paper, Box } from '@material-ui/core';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224
  },
  btn_tab: {
    justifyContent: 'flex-start',
    borderRadius: 0,
    borderBottom: '1px solid #ddd'
  },
  delete_btn: {
    color: 'red'
  },
  active_btn: {
    boxShadow: `inset 5px 0 0 0 ${theme.palette.primary.main}`,
    color: theme.palette.primary.main
  }
}));

const listSetting = [
  'Account Infomation',
  'Email notification',
  'Desktop notification',
  'Security',
  'Delete account'
];

const LeftSide = ({ index, onSelect }) => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" square>
      <Grid container direction="column">
        {listSetting.map((item, i) => (
          <Grid key={item} item>
            <Button
              className={clsx(
                classes.btn_tab,
                item === 'Delete account' && classes.delete_btn,
                index === i && classes.active_btn
              )}
              size="large"
              fullWidth
              variant="text"
              color="inherit"
              onClick={() => onSelect(i)}
              endIcon={
                index === i ? (
                  <Box position="absolute" right="-15px" top="0">
                    <FontAwesomeIcon
                      size="lg"
                      icon={['far', 'arrow-alt-circle-right']}
                    />
                  </Box>
                ) : (
                  <React.Fragment />
                )
              }
            >
              {item}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
export default LeftSide;
