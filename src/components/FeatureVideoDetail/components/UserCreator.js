import React from "react";
import { Grid, Avatar, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  big_avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(5),
  },
  buttonFollow: {
    color: "green",
    borderColor: "green",
    marginLeft: theme.spacing(5),
  },
}));
const UserCreator = () => {
  const classes = useStyles();
  const userProfile = useSelector((state) => state.auth?.userProfile);
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Avatar
        src={userProfile?.avatar}
        alt={userProfile?.username}
        className={classes.big_avatar}
      >
        T
      </Avatar>
      <Typography>{userProfile?.username || "Test User Name"}</Typography>
      <Button variant="outlined" className={classes.buttonFollow} size="small">
        Follow
      </Button>
    </Grid>
  );
};
export default UserCreator;
