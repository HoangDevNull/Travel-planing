import React from 'react';

import Navbar from './Navbar';

function index({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default index;
