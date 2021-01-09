import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { CardMedia, Grid } from "@material-ui/core";
import StackGrid from "react-stack-grid";
import { withSize } from "react-sizeme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "block",
    width: "100%",
  },
}));
const StackInfiniteScroll = ({
  pageStart,
  loadMoreHandler,
  currentSize,
  maxSize,
  loaderComponent,
  items,
  size,
}) => {
  const classes = useStyles();
  return (
    <Grid classes={classes.root}>
      <InfiniteScroll
        pageStart={pageStart}
        loadMore={loadMoreHandler}
        hasMore={currentSize < maxSize}
        loader={loaderComponent}
      >
        <StackGrid columnWidth={size.width <= 768 ? "100%" : "33.33%"}>
          {console.log(size.width)}
          {items.map((img) => {
            return (
              <CardMedia
                component="img"
                alt={img.split("/")[4] || "NULL"}
                image={img}
                title={img.split("/")[4] || "NULL TITLE"}
              />
            );
          })}
        </StackGrid>
      </InfiniteScroll>
    </Grid>
  );
};
export default withSize()(StackInfiniteScroll);
