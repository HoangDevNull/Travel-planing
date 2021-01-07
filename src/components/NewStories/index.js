import React from 'react';

import {
  Box,
  Typography,
  makeStyles,
  Container,
  Grid,
  Paper,
  TextField,
  MenuItem,
  Button
} from '@material-ui/core';

import HeadSessions from './HeadSessions';
import Editor from './components/Editor';
import { useHistory } from 'react-router-dom';
import { categories } from './data';
import Dropzone from 'react-dropzone';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';

import { uploadRequest } from 'utils/apiRequest';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { createPostAction } from 'redux/post';

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
  const dispatch = useDispatch();
  const history = useHistory();
  const userProfile = useSelector((state) => state.auth.userProfile);

  const [inputData, setInputData] = React.useState({
    title: '',
    image: '',
    category: 1,
    location: ''
  });

  const [content, setContent] = React.useState('');

  const handleDropEstimateFile = async (file) => {
    try {
      let image = file[0];
      // const { data } = await uploadRequest(image);
      setInputData({ ...inputData, image });
    } catch (err) {
      console.log(err.response);
    }
  };
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    console.log({ value, name });

    setInputData({ ...inputData, [name]: value });
  };

  const handlePreview = async () => {
    let isValid = true;
    Object.keys(inputData).forEach((input) => {
      if (input === 'image' && inputData[input] === '') {
        isValid = false;
      } else if (inputData[input].length === 0) {
        isValid = false;
      }
    });
    if (!isValid) return;
    try {
      const { data } = await uploadRequest(image);
      let payload = { ...inputData };
      payload.createdAt = moment().format('LL');
      payload.image = data.url;
      payload.content = content;
      payload.status = 'Activated';
      payload.user = userProfile;

      dispatch(createPostAction.set(payload));
      history.push('/add-story/preview');
    } catch (err) {
      console.log(err?.response);
    }
  };

  const { title, category, location, image } = inputData;
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
                  Your stories title
                  <span className={classes.required_start}>*</span>
                </Typography>
                <TextField
                  placeholder="eg. Travel around the word"
                  fullWidth
                  margin="normal"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  error={title === ''}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2" className={classes.font_bold}>
                  Pick a category
                  <span className={classes.required_start}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  margin="normal"
                  name="category"
                  value={category}
                  select
                  onChange={handleInputChange}
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
              <Grid item xs={12} sm={6} md={4}>
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
                        <Typography variant="body1" color="textSecondary">
                          {image ? image?.name : 'Drag & drop your file'}
                        </Typography>
                        <Box
                          position="absolute"
                          width="52px"
                          height="52px"
                          right="0"
                          bgcolor="primary.main"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          boxShadow={5}
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
                  placeholder="eg. South California"
                  fullWidth
                  margin="normal"
                  name="location"
                  value={location}
                  onChange={handleInputChange}
                  error={location === ''}
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={10} container justify="center">
              <Paper>
                <Editor
                  onChange={(html) => {
                    setContent(html);
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10} container justify="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handlePreview}
              >
                Preview
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NewStories;
