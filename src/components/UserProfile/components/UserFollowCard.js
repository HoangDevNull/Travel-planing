import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import { Avatar, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    cursor: 'pointer'
  },
  font_bold: {
    fontWeight: 'bold'
  },
  cursor: {
    cursor: 'pointer'
  }
});

const UserFollowCard = ({ avatar, fullName, country }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={avatar} />}
        title={fullName}
        subheader={country}
      />
    </Card>
  );
};

export default UserFollowCard;
