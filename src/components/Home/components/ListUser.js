import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  inline: {
    display: 'inline'
  },
  font_bold: {
    fontWeight: 'bold'
  }
}));

export default function ListUser({ data }) {
  const classes = useStyles();

  return (
    <List className={classes.root} disablePadding>
      {data.map(({ id, avatar, fullName, country }, index) => (
        <React.Fragment key={id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="body1" className={classes.font_bold}>
                  {fullName}
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {country}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {index !== data.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
