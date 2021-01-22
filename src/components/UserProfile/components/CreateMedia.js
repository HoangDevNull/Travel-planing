import React from "react";
import {
  Button,
  Popover,
  makeStyles,
  IconButton,
  Box,
} from "@material-ui/core";
import {
  AddOutlined,
  CreateOutlined,
  PictureAsPdfOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  buttonCreateMedia: {
    width: "100%",
    padding: theme.spacing(2),
    justifyContent: "flex-start",
  },
}));

function CreateMedia() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton
        color="secondary"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <AddOutlined />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Button
            className={classes.buttonCreateMedia}
            onClick={() => {
              history.push("/add-story");
            }}
            startIcon={<CreateOutlined />}
          >
            Add Story
          </Button>
          <Button
            className={classes.buttonCreateMedia}
            onClick={() => {
              history.push("/create-gallery");
            }}
            startIcon={<PictureAsPdfOutlined />}
          >
            Create gallery
          </Button>
        </Box>
      </Popover>
    </div>
  );
}

export default CreateMedia;
