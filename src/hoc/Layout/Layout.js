import React from 'react';

// MUI
import { Box } from '@mui/material';

// Custom components

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
