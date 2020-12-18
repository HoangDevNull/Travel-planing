import React from 'react';
import {
  Card,
  Typography,
  CardMedia,
  makeStyles,
  Box,
  Avatar,
  Link
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
    width: '30%'
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
    minHeight: 70
  }
}));

const StoryCard = ({ image, title, content, user }) => {
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
          <Link component="button" className={classes.title} variant="body1">
            {title}
          </Link>
          <Typography
            variant="body2"
            align="justify"
            className={classes.text_content}
          >
            {content}
          </Typography>
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
