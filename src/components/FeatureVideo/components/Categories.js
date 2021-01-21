import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
  },
}));
const Category = ({ title }) => {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box p="1rem" mt={matches ? "2rem" : "4rem"}>
      <Box borderBottom={1}>
        <Typography
          align="left"
          variant="h3"
          className={classes.title}
          noWrap={false}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Category;
