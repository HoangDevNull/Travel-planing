import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  Avatar,
  Button,
  IconButton,
  Tooltip,
  useMediaQuery,
  Hidden
} from '@material-ui/core';

import HeadImage from 'components/common/HeadImage';
import ScrollDownIcon from 'components/common/ScrollDownIcon';

import {
  CloudUploadOutlined,
  EditOutlined,
  AddOutlined
} from '@material-ui/icons';

import { useResize } from 'components/common/Hook/useResize';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  head_image_wrapper: {
    position: 'relative',
    display: 'block',
    boxSizing: 'borderBox',
    overflow: 'hidden',
    marginTop: -64,
    [theme.breakpoints.down('xs')]: {
      marginTop: -56
    }
  },
  big_avatar: {
    width: 200,
    height: 200,
    border: '4px solid #fff',
    [theme.breakpoints.down('sm')]: {
      width: 130,
      height: 130
    }
  },
  font_bold: {
    fontWeight: 'bold'
  },
  action_wrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  p_8: {
    padding: '8%'
  }
}));

const HeadSessions = () => {
  const match = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const size = useResize();
  const classes = useStyles();

  const userProfile = useSelector((state) => state.auth?.userProfile);

  return (
    <>
      <Box className={classes.head_image_wrapper}>
        <HeadImage src="https://images.pexels.com/photos/2347495/pexels-photo-2347495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </Box>
      <Container
        // maxWidth="md"
        className={classes.root}
        style={{ height: size.height + 'px' }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.p_8}
        >
          <Grid item>
            <Avatar
              src={userProfile?.avatar}
              alt={userProfile?.username}
              className={classes.big_avatar}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              color="secondary"
              className={classes.font_bold}
            >
              {userProfile?.username}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              color="secondary"
              className={classes.font_bold}
              align="center"
            >
              {userProfile?.country}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="secondary" align="center">
              {userProfile?.description}
            </Typography>
          </Grid>
          <Grid container justify="space-around" alignItems="center" item>
            <Box width={match ? '100%' : '45%'} mt="30px">
              <Button
                size="medium"
                variant="contained"
                color="primary"
                fullWidth={true}
              >
                Contact info
              </Button>
            </Box>
            <Box width={match ? '100%' : '45%'} mt="30px">
              <Button
                size="medium"
                variant="outlined"
                color="secondary"
                fullWidth={true}
              >
                1,043 follower
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box className={classes.action_wrapper}>
          <Box ml="10px">
            <Button
              startIcon={<CloudUploadOutlined />}
              size="medium"
              variant="outlined"
              color="secondary"
            >
              Upload media
            </Button>
          </Box>
          {/* <ButtonGroup disableElevation variant="contained" color="secondary"> */}
          <Box>
            <Tooltip title="Edit Profile">
              <IconButton color="secondary">
                <EditOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="New Post">
              <IconButton color="secondary">
                <AddOutlined />
              </IconButton>
            </Tooltip>
          </Box>
          {/* </ButtonGroup> */}
        </Box>
        <Hidden xsDown>
          <ScrollDownIcon />
        </Hidden>
      </Container>
    </>
  );
};

export default HeadSessions;
