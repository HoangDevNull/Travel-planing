import React from 'react';

import {
  makeStyles,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box
} from '@material-ui/core';

import {
  HomeRounded,
  GroupRounded,
  RecordVoiceOverRounded,
  BallotRounded
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarAction } from 'redux/sidebar';
import { useHistory } from 'react-router-dom';
import ThemeSelect from './components/ThemeSelect';

const drawerWidth = 260;
const useStyles = makeStyles((theme) => {
  return {
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    },
    logo: {
      color: theme.palette.primary.main,
      fontFamily: `'Aclonica', sans-serif`,
      textTransform: 'upperCase',
      letterSpacing: 5,
      fontWeight: 'bold',
      margin: '30px'
    },
    drawerPaper: {
      width: drawerWidth
    },
    optional: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
    }
  };
});

const menuItem = [
  {
    name: 'home',
    icon: <HomeRounded />,
    to: '/home'
  },
  {
    name: 'top-des',
    icon: <BallotRounded />,
    to: '/top'
  },

  {
    name: 'about',
    icon: <GroupRounded />,
    to: '/about'
  },
  {
    name: 'partner',
    icon: <RecordVoiceOverRounded />,
    to: '/partner'
  }
];

const SideBar = () => {
  const { t } = useTranslation('navbar');
  const history = useHistory();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    dispatch(sidebarAction.loadSideBar(open));
  };

  const handleNavigation = (to) => {
    history.push(to);
  };
  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      classes={{ paper: classes.drawerPaper }}
    >
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Typography className={classes.logo} align="center" variant="h6">
          Dolphjn
        </Typography>
        <Divider />
        <List>
          {menuItem.map((item) => (
            <ListItem
              onClick={() => {
                handleNavigation(item.to);
              }}
              button
              key={item.name}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={t(item.name)} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          className={classes.optional}
        >
          <ThemeSelect />
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default SideBar;
