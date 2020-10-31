import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';


const Home = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="head">
        <img
          src="https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="dev"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            // backgroundPosition: 'center',
            backgroundSize: 'auto 1038px',
            backgroundRepeat: 'repeat-x',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="fake" style={{ minHeight: '100vh' }}></div>
      <Container maxWidth="xl">
        <Box my={2}>
          {[...new Array(10)].map((_, index) => {
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
    </div>
  );
};

export default Home;
