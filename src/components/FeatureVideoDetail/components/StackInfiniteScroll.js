import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { CardMedia, Grid, Typography } from "@material-ui/core";
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
    cursor: "pointer",
    padding: "1rem",
    transition: "transform .2s",
    zIndex: "1",
    "&:hover": {
      transform: "scale(1.05)",
      zIndex: "200",
    },
  },
  description: {
    color: "white",
  },
}));

const styles = {
  itemDescription: {
    position: "absolute",
    bottom: "1rem",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0) 10%, rgba(87,87,87,1) 100%, rgba(0,212,255,1) 100%)",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: "1rem",
    right: "1rem",
  },
};

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
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOnClickCardMedia = (img) => {
    setImageToModel(img);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeNextImage = () => {
    setImageToModel(items[selectedIndex + 1]);
    setSelectedIndex((p) => p + 1);
  };
  const handleChangePrevImage = () => {
    if (selectedIndex > 0) {
      setImageToModel(items[selectedIndex - 1]);
      setSelectedIndex((p) => p - 1);
    }
  };

  return (
    <Grid className={classes.root}>
      <ItemModal
        open={openModal}
        handleClose={handleCloseModal}
        img={imageToModel}
        onChangeNextImage={handleChangeNextImage}
        onChangePrevImage={handleChangePrevImage}
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
                <div
                  onClick={() => {
                    handleOnClickCardMedia(img);
                    setSelectedIndex(index);
                  }}
                  style={{ position: "relative" }}
                  className={classes.media}
                >
                  <CardMedia
                    component="img"
                    alt={img.url || "NULL"}
                    image={img.url}
                    title={img.url || "NULL TITLE"}
                  />
                  <div style={styles.itemDescription}>
                    <Typography className={classes.description}>
                      {img.description}
                    </Typography>
                  </div>
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
