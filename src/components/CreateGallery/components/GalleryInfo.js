import React from "react";
import {
  Typography,
  TextField,
  IconButton,
  Grid,
  makeStyles,
  Button,
} from "@material-ui/core";
import { SaveRounded, AddCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  tfOutLined: {
    width: "100%",
  },
  container: {
    padding: theme.spacing(2),
  },
  groupButton: {
    height: "100%",
    padding: theme.spacing(2),
  },
}));

function GalleryInfo({ onAddNewItem }) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <Grid container>
          <Grid item xs={12} className={classes.container}>
            <Typography variant="h4">Album Name</Typography>
            <TextField
              placeholder="Make some noise place"
              variant="outlined"
              required
              className={classes.tfOutLined}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={6} className={classes.container}>
                <Typography variant="h5">Place</Typography>
                <TextField
                  placeholder="California, U.S"
                  variant="outlined"
                  required
                  className={classes.tfOutLined}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.container}>
                <Typography variant="h5">Description</Typography>
                <TextField
                  placeholder="Write some description..."
                  variant="outlined"
                  className={classes.tfOutLined}
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
          className={classes.groupButton}
        >
          <Grid item>
            <Button
              startIcon={<SaveRounded />}
              color="primary"
              variant="contained"
            >
              SAVE
            </Button>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              onClick={() => {
                onAddNewItem();
              }}
            >
              <AddCircle fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default GalleryInfo;
