import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import HeadImage from 'components/common/HeadImage';

const Home = () => {
  return (
    <>
      <HeadImage
        src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="dev"
      />
      <Box minHeight="100vh" />
      <Container maxWidth="xl">
        <Box my={2}>
          {[...new Array(500)].map((_, index) => {
            return (
              <Typography variant="subtitle1" key={index}>
                `Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.`
              </Typography>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Home;
