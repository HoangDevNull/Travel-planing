import React, { useEffect, useState } from 'react';

import {
  makeStyles,
  Box,
  IconButton,
  Typography,
  Avatar,
  CircularProgress
} from '@material-ui/core';

import ReactPlayer from 'react-player';
import {
  PlayArrow,
  VolumeOffOutlined,
  VolumeUpOutlined
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative'
  },
  btn_play_wrapper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)'
  },
  back_drop: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 15,
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
  },
  circle_btn: {
    border: `1px solid ${theme.palette.secondary.main}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  detail_wrapper: {
    position: 'absolute',
    left: 30,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column'
  },
  muted_wrapper: {
    position: 'absolute',
    right: 30,
    bottom: 10
  },
  font_bold: {
    fontWeight: 'bold'
  }
}));

const VideoPlayer = ({ url, title, user }) => {
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const { avatar, fullName } = user;
  const classes = useStyles();
  const handlePlay = () => {
    setPlaying(true);
  };
  const handlePause = () => {
    setPlaying(false);
  };

  useEffect(() => {
    setLoading(true);
  }, [url]);
  return (
    <Box width="100%" height="100%" position="relative">
      <ReactPlayer
        // ref={(ref) => (videPlayerRef = ref)}
        loop={true}
        width="100%"
        height="100%"
        url={url}
        volume={0.8}
        onReady={() => setLoading(false)}
        muted={muted}
        playing={playing}
        onPlay={handlePlay}
        onPause={handlePause}
        onClick={handlePause}
        className={classes.root}
      />

      {loading ? (
        <>
          <Box className={classes.back_drop} />
          <Box className={classes.btn_play_wrapper}>
            <CircularProgress color="secondary" />
          </Box>
        </>
      ) : (
        !playing && (
          <>
            <Box className={classes.back_drop} />
            <Box className={classes.btn_play_wrapper}>
              <IconButton
                color="secondary"
                className={classes.circle_btn}
                onClick={() => setPlaying(true)}
              >
                <PlayArrow />
              </IconButton>
            </Box>
            <Box className={classes.detail_wrapper}>
              <Typography
                variant="h6"
                color="secondary"
                className={classes.font_bold}
              >
                {title}
              </Typography>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box mr="20px" my="15px">
                  <Avatar alt="Cindy Baker" src={avatar} />
                </Box>
                <Typography
                  variant="body2"
                  color="secondary"
                  className={classes.font_bold}
                >
                  {fullName}
                </Typography>
              </Box>
            </Box>

            <Box className={classes.muted_wrapper}>
              <IconButton
                color="secondary"
                onClick={() => {
                  setMuted(!muted);
                }}
              >
                {muted ? <VolumeOffOutlined /> : <VolumeUpOutlined />}
              </IconButton>
            </Box>
          </>
        )
      )}
    </Box>
  );
};

export default VideoPlayer;
