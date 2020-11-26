import React from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';

const CenterDiv = (props) => {
  const { children } = props;
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        {children}
      </Box>
    </>
  );
};

export default CenterDiv;
