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
  Hidden,
} from "@material-ui/core";
import {
  StarRateOutlined,
  RemoveRedEye,
  LocationOn,
  ArrowBackRounded,
  ArrowForwardRounded,
  Image as ImageIcon,
} from "@material-ui/icons";
import CustomHooks from "utils/customHook";
import MapBox from "./MapBox";

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
  favoriteIcon: {
    color: "red",
  },
  mapBox: {
    width: ({ width }) => width / 3,
    height: ({ height }) => height / 3,
  },
}));

function ItemModal({
  open,
  handleClose,
  img,
  onChangeNextImage,
  onChangePrevImage,
}) {
  const { width, height } = CustomHooks.useWindowDimensions();
  const classes = useStyles({ width, height });
  const [showMap, setShowMap] = React.useState(false);

  const handleSwitchMainContent = () => {
    setShowMap((val) => !val);
  };

  const mainCardMedia = (
    <CardMedia
      component="img"
      alt={img.url || "NULL"}
      image={img.url}
      title={img.url || "NULL TITLE"}
      className={classes.media}
    />
  );
  const mainMapBox = (
    <Grid container>
      <Grid item xs={12}>
        <MapBox width={width * 0.75} height={height * 0.75} />
      </Grid>
    </Grid>
  );

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
            <IconButton
              className={classes.arrowLeftIcon}
              size="medium"
              onClick={() => onChangePrevImage()}
            >
              <ArrowBackRounded />
            </IconButton>
            <IconButton
              className={classes.arrowRightIcon}
              size="medium"
              onClick={() => onChangeNextImage()}
            >
              <ArrowForwardRounded />
            </IconButton>
            <Grid container>
              <Hidden xsDown>
                <Grid item md={2}></Grid>
              </Hidden>
              <Grid item xs={12} md={8}>
                <Box display="flex" wrap="nowrap" py={1} alignItems="center">
                  <Box flexGrow={1} flexWrap="wrap">
                    <Typography variant="h5">{img.description}</Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    startIcon={<StarRateOutlined />}
                    disabled
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
              <Hidden xsDown>
                <Grid item md={2}></Grid>
              </Hidden>
            </Grid>

            {showMap ? mainMapBox : mainCardMedia}

            <Grid
              direction="row"
              justify="space-evenly"
              container
              wrap="nowrap"
              my={1}
              alignItems="center"
            >
              <Box display="flex" flexDirection="row">
                <RemoveRedEye />
                <Typography variant="subtitle1" style={{ marginLeft: "1rem" }}>
                  0 views
                </Typography>
              </Box>
              <Button
                variant="outlined"
                className={classes.button}
                startIcon={showMap ? <ImageIcon /> : <LocationOn />}
                onClick={handleSwitchMainContent}
              >
                {showMap ? "View Image" : "View Location"}
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default ItemModal;
