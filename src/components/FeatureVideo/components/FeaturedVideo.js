import React from "react";
import {
  Box,
  Grid,
  makeStyles,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  paperLeft: {
    paddingInline: theme.spacing(4),
  },
  root: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: 10,
    backgroundColor: "gray",
    [theme.breakpoints.down("sm")]: {
      height: 50,
      width: 70,
    },
    [theme.breakpoints.up("md")]: {
      height: 70,
      width: 130,
    },
    [theme.breakpoints.up("lg")]: {
      height: 100,
      width: 200,
    },
  },
  bigImage: {
    padding: theme.spacing(2),
    borderRadius: 10,
    backgroundColor: "gray",
    [theme.breakpoints.down("sm")]: {
      height: 150,
      width: 230,
    },
    [theme.breakpoints.up("md")]: {
      height: 250,
      width: 320,
    },
    [theme.breakpoints.up("lg")]: {
      height: 400,
      width: 650,
    },
  },
  title: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontWeight: 300,
    },
  },
  boxText: {
    paddingLeft: theme.spacing(2),
  },
}));

function FeaturedVideo({ items, onClick }) {
  const classes = useStyles();
  const [shadowCard, setShadowCard] = React.useState(0);

  return (
    <Grid container direction="row" className={classes.paper}>
      <Grid item>
        <Box
          boxShadow={shadowCard}
          style={{ borderRadius: "1rem", cursor: "pointer" }}
          onClick={onClick}
          onMouseEnter={() => setShadowCard(3)}
          onMouseLeave={() => setShadowCard(0)}
        >
          <CardMedia className={classes.bigImage} image={items[0].image} />
        </Box>
      </Grid>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        className={classes.paperLeft}
      >
        <Item
          img={items[1].image}
          title={items[1].title}
          author={items[1].author}
          onClick={onClick}
        />
        <Item
          img={items[2].image}
          title={items[2].title}
          author={items[2].author}
          onClick={onClick}
        />
        <Item
          img={items[3].image}
          title={items[3].title}
          author={items[3].author}
          onClick={onClick}
        />
      </Box>
    </Grid>
  );
}

const Item = ({ img, title, author = "unknown", onClick }) => {
  const classes = useStyles();
  const [shadowCard, setShadowCard] = React.useState(0);
  return (
    <Box
      display="flex"
      flexDirection="row"
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        className={classes.boxText}
      >
        <Typography className={classes.title} variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {author}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeaturedVideo;
