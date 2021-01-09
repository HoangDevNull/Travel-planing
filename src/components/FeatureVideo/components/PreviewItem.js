import React from "react";
import { Box, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  image: {
    borderRadius: 10,
    backgroundColor: "gray",
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: 500,
  },
}));

const PreviewItem = ({ img, title, author = "unknown" }) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <CardMedia className={classes.image} image={img} />
      <Typography className={classes.title} variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {author}
      </Typography>
    </Box>
  );
};
export default PreviewItem;
