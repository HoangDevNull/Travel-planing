import React from "react";
import {
  Modal,
  Fade,
  Backdrop,
  CardMedia,
  makeStyles,
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import {
  StarRateOutlined,
  RemoveRedEye,
  LocationOn,
  ArrowBackRounded,
  ArrowForwardRounded,
} from "@material-ui/icons";
import CustomHooks from "utils/customHook";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: "10px",
  },
  media: {
    padding: theme.spacing(2, 2, 2),
    objectFit: "scale-down",
    maxWidth: ({ width }) => width * 0.75,
    maxHeight: ({ height }) => height * 0.75,
  },
  button: {
    borderRadius: "10px",
    textTransform: "none",
    margin: theme.spacing(1),
  },
  arrowLeftIcon: {
    color: "white",
    position: "absolute",
    left: "3rem",
    top: ({ height }) => height / 2,
    border: "2px solid white",
  },
  arrowRightIcon: {
    position: "absolute",
    right: "3rem",
    top: ({ height }) => height / 2,
    color: "white",
    border: "2px solid white",
  },
}));

function ItemModal({ open, handleClose, img }) {
  const { width, height } = CustomHooks.useWindowDimensions();
  const classes = useStyles({ width, height });
  return (
    <div>
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
            <IconButton className={classes.arrowLeftIcon} size="medium">
              <ArrowBackRounded />
            </IconButton>
            <IconButton className={classes.arrowRightIcon} size="medium">
              <ArrowForwardRounded />
            </IconButton>
            <Grid
              direction="row"
              justify="space-around"
              container
              wrap="nowrap"
              my={2}
            >
              <Typography variant="h5">California</Typography>
              <Button
                variant="outlined"
                className={classes.button}
                startIcon={<StarRateOutlined />}
              >
                Save
              </Button>
            </Grid>
            <CardMedia
              component="img"
              alt={img.split("/")[4] || "NULL"}
              image={img}
              title={img.split("/")[4] || "NULL TITLE"}
              className={classes.media}
            />
            <Grid
              direction="row"
              justify="space-evenly"
              container
              wrap="nowrap"
              my={2}
            >
              <Box display="flex" flexDirection="row">
                <RemoveRedEye />
                <Typography variant="subtitle1" style={{ marginLeft: "1rem" }}>
                  69 views
                </Typography>
              </Box>
              <Button
                variant="outlined"
                className={classes.button}
                startIcon={<LocationOn />}
              >
                View Location
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default ItemModal;
