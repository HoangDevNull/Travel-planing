import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loadingMore: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
}));
const LoaderProgress = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingMore}>
      <CircularProgress color="inherit" />
    </div>
  );
};
export default LoaderProgress;
