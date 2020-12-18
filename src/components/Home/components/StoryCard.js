import React from 'react';
import {
  Card,
  Typography,
  CardMedia,
  makeStyles,
  Box,
  Avatar,
  Link,
  useMediaQuery
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    marginTop: 30,
    maxHeight: 180,
    background: 'transparent',
    boxShadow: 'none'
  },
  cover: {
    width: '30%',
    borderRadius: 15
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    paddingLeft: 30,
    width: '70%'
  },
  avatar: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5)
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.textColor
  },
  text_content: {
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: 60 /* fallback */
  }
}));

const StoryCard = ({ image, title, content, user }) => {
  const match = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const { avatar, fullName } = user;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
      <div className={classes.detail}>
        <Box mx="8px">
          <Link
            component="button"
            noWrap={match}
            className={classes.title}
            variant="body1"
            align="left"
          >
            {title}
          </Link>
          {/* <Hidden xsDown> */}
          <Typography
            variant="body2"
            align="justify"
            className={classes.text_content}
          >
            {content}
          </Typography>
          {/* </Hidden> */}
        </Box>

        <Box display="flex" alignItems="center" px="8px" mt="15px">
          <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
          <Box mx="20px">
            <Typography variant="caption" align="center">
              {fullName}
            </Typography>
          </Box>
        </Box>
      </div>
    </Card>
  );
};

export default StoryCard;
