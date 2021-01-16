import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { CardMedia, Grid, Card } from "@material-ui/core";
import StackGrid from "react-stack-grid";
import { withSize } from "react-sizeme";
import { makeStyles } from "@material-ui/core/styles";
import ItemModal from "./ItemModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "block",
    width: "100%",
  },
  media: {
    padding: "1rem",
    transition: "transform .2s",
    zIndex: "1",
    "&:hover": {
      transform: "scale(1.05)",
      zIndex: "200",
    },
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
  const [openModal, setOpenModal] = useState(false);
  const [imageToModel, setImageToModel] = useState("");

  const handleOnClickCardMedia = (img) => {
    setImageToModel(img);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Grid className={classes.root}>
      <ItemModal
        open={openModal}
        handleClose={handleCloseModal}
        img={imageToModel}
      />
      <InfiniteScroll
        pageStart={pageStart}
        loadMore={loadMoreHandler}
        hasMore={currentSize < maxSize}
        loader={loaderComponent}
      >
        <StackGrid columnWidth={size.width <= 768 ? "100%" : "33.33%"}>
          {items.map((img, index) => {
            return (
              <React.Fragment key={index}>
                <div onClick={() => handleOnClickCardMedia(img)}>
                  <CardMedia
                    component="img"
                    alt={img.split("/")[4] || "NULL"}
                    image={img}
                    title={img.split("/")[4] || "NULL TITLE"}
                    className={classes.media}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </StackGrid>
      </InfiniteScroll>
    </Grid>
  );
};
export default withSize()(StackInfiniteScroll);
