import React, { useState } from "react";
import {
  Modal,
  Fade,
  Backdrop,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import CustomHooks from "utils/customHook";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  media: {
    maxWidth: ({ width }) => width / 2,
    maxHeight: ({ height }) => height / 2,
  },
}));

function ItemModal({ open, handleClose, img }) {
  const { width, height } = CustomHooks.useWindowDimensions();
  const classes = useStyles({ width, height });
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <CardMedia
            component="img"
            alt={img.split("/")[4] || "NULL"}
            image={img}
            title={img.split("/")[4] || "NULL TITLE"}
            className={classes.media}
          />
        </div>
      </Fade>
    </Modal>
  );
}
export default ItemModal;
