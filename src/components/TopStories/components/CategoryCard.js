import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  Card,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
  CardActions,
  Box,
  Grid,
  Link,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '85%',
    // marginLeft: "30px",
    filter: "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
    borderRadius: "10px",
  },
  fontBold: {
    fontWeight: "bold",
  },
  media: {
    height: 250,
  },
  outStanding: {
    position: "absolute",
    top: "23px",
    left: 0,
    size: 20,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    padding: "10px 13px",
    color: "#ffffff",
  },
  avatar: {
    position: "absolute",
    right: 28,
    zIndex: 2,
    bottom: "-24px",
    width: 48,
    height: 48,
    borderRadius: "50%",
    border: "4px solid #ffffff",
  },
  location: {
    fontSize: 30,
    color: "#757575",
  },
  cardTitle: {
    display: "flex",
    alignItems: "center",
    color: "#000000",
    fontSize: "20px",
    marginBottom: 10,
    fontWeight: "bold",
  },
  btnRead: {
    color: "#3D9A88",
    padding: "10px 15px",
    fontWeight: "bold",
    border: "1px solid #3D9A88",
    cursor: "pointer",
    borderRadius: 5,
  },
  cardItemRead: {
    marginLeft: 0,
    marginTop: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
    fontSize: "20px",
    marginBottom: "0.3rem",
    color: theme.palette.action.active,
  },
  itemcard: {
    marginLeft: 10,
    marginRight: 10,
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  },
}));

const categories = {
  "Travel on budget": "primary.main",
  Backbacking: "info.main",
  "Adventure travel": "success.main",
  "Road trip": "error.main",
};
const CategoryCard = (obj) => {
  const classes = useStyles();
  const history = useHistory();

  const handleReadMoreCLick = () => {
    const { id } = obj;
    history.push(`/story/${id}`);
  };

  const rate = Math.floor(Math.random() * 4 + 1);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={obj.image} />
        <Box bgcolor={categories[obj.category]} className={classes.outStanding}>
          <Typography className={classes.fontBold}>{obj.category}</Typography>
        </Box>
        <CardMedia className={classes.avatar} image={obj.user.avatar} />
      </CardActionArea>
      <CardActions className={classes.itemcard}>
        <Grid container>
          <Box className={classes.cardTitle}>
            <LocationOnIcon className={classes.icon} />
            <Typography variant="caption" gutterBottom>
              {obj.location}
            </Typography>
          </Box>

          <Box className={classes.cardTitle}>{obj.title}</Box>

          <Grid container item xs={12} justify="space-between">
            <Box className={classes.cardTitle}>
              <AccessTimeIcon className={classes.icon} />
              <Typography variant="caption" gutterBottom>
                {moment(obj.createdAt).format("LL")}
              </Typography>
            </Box>
            <Box className={classes.cardTitle}>
              <VisibilityIcon className={classes.icon} />
              <Typography variant="caption" gutterBottom>
                {obj.viewer}
              </Typography>
            </Box>
          </Grid>

          <Grid
            container
            justify="space-between"
            className={classes.cardItemRead}
            item
            xs={12}
          >
            <Grid>
              <Rating value={rate} readOnly />
            </Grid>
            <Grid>
              <Link className={classes.btnRead} onClick={handleReadMoreCLick}>
                Read More
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
export default CategoryCard;
