import React from "react";
import { Box, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: 10,
    backgroundColor: "gray",
    [theme.breakpoints.down("sm")]: {
      height: 100,
      width: 100,
    },
    [theme.breakpoints.up("md")]: {
      height: 220,
      width: 220,
    },
    [theme.breakpoints.up("lg")]: {
      height: 250,
      width: 250,
    },
  },
  title: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontWeight: 300,
    },
  },
}));

const PreviewItem = ({ img, title, author = "unknown", onClick }) => {
  const classes = useStyles();
  const [shadowCard, setShadowCard] = React.useState(0);
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
      className={classes.root}
      onMouseEnter={() => setShadowCard(3)}
      onMouseLeave={() => setShadowCard(0)}
    >
      <Box boxShadow={shadowCard} style={{ borderRadius: "1rem" }}>
        <CardMedia className={classes.image} image={img} />
      </Box>

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
