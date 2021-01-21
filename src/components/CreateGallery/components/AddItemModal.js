import React, { useCallback, useState, useRef, useEffect } from "react";
import {
  Modal,
  Fade,
  Backdrop,
  makeStyles,
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  TextField,
  Container,
  Slider,
} from "@material-ui/core";
import CustomHooks from "utils/customHook";
import { HighlightOff, CloudUpload } from "@material-ui/icons";
import { getCroppedImg } from "utils/canvas";
import Cropper from "react-easy-crop";

const useStyles = makeStyles((theme) => ({
  slider: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.5)",
    color: "black",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: "10px",
    position: "relative",
  },
  tfOutLined: {
    width: "100%",
  },
  container: {
    padding: theme.spacing(2),
  },
  containerChild: {
    padding: theme.spacing(2, 0),
  },
  root: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxImage: {
    height: ({ height }) => height / 3,
    width: "100%",
    padding: theme.spacing(2),
    border: "1px solid gray",
    borderRadius: "5px",
    position: "relative",
  },
  buttonSave: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

function AddItemModal({ open, handleClose, onSavedNewItem }) {
  const { width, height } = CustomHooks.useWindowDimensions();
  const classes = useStyles({ width, height });
  const initialStateNull = null;
  const UploadFile = () => {
    return (
      <>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={onFileChange}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <CloudUpload fontSize="large" />
          </IconButton>
        </label>
      </>
    );
  };
  const [imageSrc, setImageSrc] = useState(initialStateNull);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(initialStateNull);
  const [croppedImage, setCroppedImage] = useState(initialStateNull);
  const descriptionRef = useRef("");

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const ouputCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels, 0);
      setCroppedImage(croppedImage);
      console.log("Out put done");
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };
  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  useEffect(() => {
    if (croppedImage && descriptionRef.current.value) {
      const saveItem = {
        url: croppedImage,
        description: descriptionRef.current.value,
      };
      console.log("DONE: " + JSON.stringify(saveItem));
      onSavedNewItem(saveItem);
      handleClose();
    }
    return () => {
      setCroppedImage(initialStateNull);
      setImageSrc(initialStateNull);
    };
  }, [croppedImage]);

  return (
    <Container className={classes.root}>
      <Modal
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
            <IconButton
              onClick={() => handleClose()}
              className={classes.closeButton}
            >
              <HighlightOff />
            </IconButton>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Grid container className={classes.container}>
                  <Grid item xs={12} md={3} className={classes.containerChild}>
                    <Typography variant="h5">Title</Typography>
                  </Grid>
                  <Grid item xs={12} md={9} className={classes.containerChild}>
                    <TextField
                      placeholder="Some title..."
                      variant="outlined"
                      size="small"
                      className={classes.tfOutLined}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} className={classes.containerChild}>
                    <Typography variant="h5">Description</Typography>
                  </Grid>
                  <Grid item xs={12} md={9} className={classes.containerChild}>
                    <TextField
                      placeholder="Some description..."
                      multiline
                      rows={3}
                      variant="outlined"
                      className={classes.tfOutLined}
                      inputRef={descriptionRef}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3} className={classes.buttonSave}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => ouputCroppedImage()}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
            <Box
              className={classes.boxImage}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {imageSrc ? (
                <>
                  <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                  <Slider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e, zoom) => setZoom(zoom)}
                    className={classes.slider}
                  />
                </>
              ) : (
                <UploadFile />
              )}
            </Box>
          </div>
        </Fade>
      </Modal>
    </Container>
  );
}
export default AddItemModal;
