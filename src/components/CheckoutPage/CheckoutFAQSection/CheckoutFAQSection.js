import React from 'react';

// MUI
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Custom components
import FAQApp from './FAQApp';
import FAQAccordions from './FAQAccordions';

const CheckoutFAQSection = (props) => {
  return (
    <SectionRoot>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '736px',
          m: '0 auto',
        }}
      >
        <FAQApp />
        <FAQAccordions />
      </Box>
    </SectionRoot>
  );
};

const SectionRoot = styled('section')(() => ({
  width: '100%',
}));

export default CheckoutFAQSection;
