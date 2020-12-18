import React from 'react';
import {
  Card,
  Typography,
  makeStyles,
  Box,
  useMediaQuery
} from '@material-ui/core';

import ReactPlayer from 'react-player';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    maxHeight: 200,
    padding: 5,
    background: 'transparent',
    boxShadow: 'none',
    borderRadius: 5,
    transition: `all .8s ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down('xs')]: {
      marginTop: 20
    },
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.primary.main,
      color: '#fff !important'
    }
  },
  active: {
    background: theme.palette.primary.main,
    color: '#fff !important'
  },
  detail: {
    width: '60%',
    padding: 0,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]: {
      width: '70%',
      paddingLeft: 0
    }
  },
  title: {
    fontWeight: 'bold'
  },
  text_content: {
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: 60 /* fallback */,
    [theme.breakpoints.down('xs')]: {
      '-webkit-line-clamp': 2,
      height: 40
    }
  },
  media: {
    maxWidth: 200,
    width: '40%',
    [theme.breakpoints.down('xs')]: {
      width: '30%'
    }
  },
  video: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative'
  }
}));

const VideoCard = ({ url, title, content, active }) => {
  const match = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, active && classes.active)}>
      <Box className={classes.media}>
        <ReactPlayer
          // ref={(ref) => (videPlayerRef = ref)}
          width="100%"
          height="100%"
          url={url}
          playing={false}
          pip={false}
          className={classes.video}
        />
      </Box>
      <div className={classes.detail}>
        <Box
          mx="8px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Typography
            noWrap={match}
            className={classes.title}
            variant="body1"
            align="left"
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            align="justify"
            className={classes.text_content}
          >
            {content}
          </Typography>
        </Box>
      </div>
    </Card>
  );
};

export default VideoCard;
