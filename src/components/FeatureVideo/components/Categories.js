import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
  },
}));
const Category = ({ title }) => {
  const classes = useStyles();
  return (
    <Box borderBottom={1}>
      <Typography align="left" variant="h3" className={classes.title}>
        {title}
      </Typography>
    </Box>
  );
};

export default Category;
