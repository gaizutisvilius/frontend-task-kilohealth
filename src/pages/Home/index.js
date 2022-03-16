import React from 'react';

// MUI
import { Box, Container } from '@mui/material';

// Custom components

const Home = () => {
  return (
    <Box
      component='main'
      sx={
        {
          // flexGrow: 1,
          // py: 8,
        }
      }
    >
      <Container maxWidth={false}></Container>
    </Box>
  );
};

export default Home;
