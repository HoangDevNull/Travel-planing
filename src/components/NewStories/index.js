import React from 'react';

import {
  Box,
  Typography,
  makeStyles,
  Container,
  Grid,
  Paper,
  TextField,
  MenuItem
} from '@material-ui/core';

import HeadSessions from './HeadSessions';
import Editor from './components/Editor';

import { categories } from './data';
import Dropzone from 'react-dropzone';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
const useStyles = makeStyles((theme) => ({
  root: {},
  head_image_wrapper: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  font_bold: {
    fontWeight: 'bold'
  },
  required_start: {
    color: 'red'
  },
  uploadBox: {
    width: '100%',
    height: '100%',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    cursor: 'pointer',
    border: '1px dashed #707070'
  }
}));

const NewStories = () => {
  const classes = useStyles();

  const [fileAvatar, setFileAvatar] = React.useState(null);

  const handleDropEstimateFile = (file) => {
    let image = file[0];

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setFileAvatar(reader.result.toString());
    };
  };
  return (
    <>
      <HeadSessions />
      <Box my="80px">
        <Container>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={12} sm={10}>
              <Typography variant="h5" className={classes.font_bold}>
                Create new stories
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2" className={classes.font_bold}>
                  Your stories name
                  <span className={classes.required_start}>*</span>
                </Typography>
                <TextField
                  placeholder="name"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2" className={classes.font_bold}>
                  Pick a category
                  <span className={classes.required_start}>*</span>
                </Typography>
                <TextField
                  value={0}
                  placeholder="Email"
                  fullWidth
                  margin="normal"
                  select
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                >
                  {categories.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.title}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2" className={classes.font_bold}>
                  Upload an main image
                  <span className={classes.required_start}>*</span>
                </Typography>
                <Dropzone onDrop={(file) => handleDropEstimateFile(file)}>
                  {({ getRootProps, getInputProps }) => (
                    <Box mt="16px" mb="8px">
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        {...getRootProps()}
                        className={classes.uploadBox}
                        p="14px"
                        position="relative"
                      >
                        <input {...getInputProps()} />
                        <Typography variant="body1">
                          Drag and drop your file
                        </Typography>
                        <Box
                          position="absolute"
                          width="50px"
                          height="50px"
                          right="0"
                          bgcolor="primary.main"
                        >
                          <BackupOutlinedIcon color="secondary" />
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Dropzone>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2" className={classes.font_bold}>
                  Location
                  <span className={classes.required_start}>*</span>
                </Typography>
                <TextField
                  placeholder="name"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={10} container justify="center">
              <Paper>
                <Editor />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NewStories;
