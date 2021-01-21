import React, { useState } from "react";
import { CardMedia, Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ItemModal from "./ItemModal";
import { Delete } from "@material-ui/icons";
import AddItemModal from "./AddItemModal";

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
    },
  },
  description: {
    color: "white",
  },
  deleteButton: {
    zIndex: 10,
    position: "absolute",
    top: theme.spacing(3),
    right: theme.spacing(3),
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "white",
    },
    color: "red",
  },
}));

const styles = {
  itemDescription: {
    position: "absolute",
    bottom: "1rem",
    background: "rgb(255,255,255)",
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

const ListImage = ({ items, onDeleteImage }) => {
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
      <Grid container>
        {items.map((img, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <div style={{ position: "relative" }}>
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => onDeleteImage(index)}
                >
                  <Delete />
                </IconButton>
                <div
                  className={classes.media}
                  onClick={() => {
                    handleOnClickCardMedia(img);
                  }}
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
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default ListImage;
