import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  Avatar,
  Button,
  IconButton,
  Tooltip,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import HeadImage from "components/common/HeadImage";
import ScrollDownIcon from "components/common/ScrollDownIcon";

import {
  CloudUploadOutlined,
  EditOutlined,
  ContactMail,
  GroupAdd,
} from "@material-ui/icons";

import { useResize } from "components/common/Hook/useResize";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CreateMedia from "./components/CreateMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%, 0)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  head_image_wrapper: {
    position: "relative",
    display: "block",
    boxSizing: "borderBox",
    overflow: "hidden",
    marginTop: -64,
    [theme.breakpoints.down("xs")]: {
      marginTop: -56,
    },
  },
  big_avatar: {
    width: 200,
    height: 200,
    border: "4px solid #fff",
    [theme.breakpoints.down("sm")]: {
      width: 100,
      height: 100,
    },
  },
  font_bold: {
    fontWeight: "bold",
  },
  action_wrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  p_8: {
    padding: "8%",
  },
  button_social: {
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      padding: 8,
    },
  },
  description: {
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
}));

function buildFileSelector() {
  const fileSelector = document.createElement("input");
  fileSelector.setAttribute("type", "file");
  fileSelector.setAttribute("accept", "image/x-png,image/gif,image/jpeg");
  return fileSelector;
}

let fileSelector = null;

const HeadSessions = () => {
  const history = useHistory();
  const match = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const size = useResize();
  const classes = useStyles();

  const [mainImage, setMainImage] = React.useState(
    "https://images.pexels.com/photos/2347495/pexels-photo-2347495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  );

  React.useEffect(() => {
    fileSelector = buildFileSelector();
  }, []);

  const userProfile = useSelector((state) => state.auth?.userProfile);

  const handleUploadMainImage = () => {
    fileSelector.click();
    fileSelector.onchange = async (e) => {
      try {
        const file = fileSelector.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setMainImage(reader.result.toString());
        };
      } catch (err) {}
    };
  };

  return (
    <>
      <Box className={classes.head_image_wrapper}>
        <HeadImage src={mainImage} />
      </Box>
      <Container
        // maxWidth="md"
        className={classes.root}
        style={{ height: size.height + "px" }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.p_8}
        >
          <Grid item>
            <Box mb="20px">
              <Avatar
                src={userProfile?.avatar}
                alt={userProfile?.username}
                className={classes.big_avatar}
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.font_bold}
              gutterBottom
            >
              {userProfile?.username}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              color="secondary"
              className={classes.font_bold}
              align="center"
              gutterBottom
            >
              {userProfile?.country}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.description}
              align="center"
            >
              {userProfile?.description}
            </Typography>
          </Grid>
          <Grid container justify="space-around" alignItems="center" item>
            <Box width={match ? "47%" : "45%"} mt="30px">
              <Button
                className={classes.button_social}
                variant="contained"
                color="primary"
                fullWidth={true}
              >
                {match ? <ContactMail /> : "Contact info"}
              </Button>
            </Box>
            <Box width={match ? "47%" : "45%"} mt="30px">
              <Button
                className={classes.button_social}
                variant="outlined"
                color="secondary"
                fullWidth={true}
              >
                1,043&ensp; {match ? <GroupAdd /> : "follower"}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box className={classes.action_wrapper}>
          <Box ml="10px">
            <Button
              startIcon={<CloudUploadOutlined />}
              size="medium"
              variant="outlined"
              color="secondary"
              onClick={handleUploadMainImage}
            >
              Upload media
            </Button>
          </Box>
          {/* <ButtonGroup disableElevation variant="contained" color="secondary"> */}
          <Box display="flex" flexDirection="row">
            <Tooltip title="Edit Profile">
              <IconButton
                color="secondary"
                onClick={() => {
                  history.push("/setting");
                }}
              >
                <EditOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="New Post">
              <CreateMedia />
            </Tooltip>
          </Box>
          {/* </ButtonGroup> */}
        </Box>
        <Hidden xsDown>
          <ScrollDownIcon />
        </Hidden>
      </Container>
    </>
  );
};

export default HeadSessions;
