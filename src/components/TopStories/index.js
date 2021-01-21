import React from 'react';

import {
  Box,
  Typography,
  makeStyles,
  Container,
  FormControl
} from '@material-ui/core';

import HeadSessions from './HeadSessions';
import FirstElement from './elements/FirstElement';
import SecondElement from './elements/SecondElement';

import { postData } from './data';

const useStyles = makeStyles((theme) => ({
  root: {},
  head_image_wrapper: {
    position: 'absolute',
    top: 0,
    left: 0
  }
}));

const TopStories = () => {
  const classes = useStyles();

  const [data, setData] = React.useState(postData);

  const handleSearch = (e) => {
    const { value } = e.target;
    if (value === '') {
      setData(postData);
      return;
    }
    const newData = [...data].filter((x) => x.title.includes(value));
    setData(newData);
  };
  const handleFilter = (e) => {
    const { name, value } = e.target;
  };

  return (
    <>
      <HeadSessions />
      <Box mb="50px">
        <Container>
          <Box>
            <FirstElement onSearch={handleSearch} onFilter={handleFilter} />
          </Box>
          <SecondElement data={data} />
        </Container>
      </Box>
    </>
  );
};

export default TopStories;
