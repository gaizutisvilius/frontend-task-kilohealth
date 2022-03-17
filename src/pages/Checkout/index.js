import React from 'react';

// MUI
import { Box, Container } from '@mui/material';

// Custom components
import SEO from '../../components/SEO';
import CheckoutProgramSection from '../../components/CheckoutPage/CheckoutProgramSection/CheckoutProgramSection';
import CheckoutTestimonialsSection from '../../components/CheckoutPage/CheckoutTestimonialsSection/CheckoutTestimonialsSection';
import CheckoutFAQSection from '../../components/CheckoutPage/CheckoutFAQSection/CheckoutFAQSection';

const Checkout = () => {
  return (
    <>
      <SEO title='Kilo.Health Product Website | Checkout ' />
      <Box
        component='main'
        sx={{
          pt: 18,
          pb: {
            sm: 9,
            xs: 0,
          },
        }}
      >
        <Container maxWidth={'1120px'}>
          <CheckoutProgramSection
            title='Get access to your yoga program now!'
            subtitle='true'
          />
          <CheckoutTestimonialsSection />
          <CheckoutFAQSection />
          <CheckoutProgramSection title='Start your yoga program today!' />
        </Container>
      </Box>
    </>
  );
};

export default Checkout;
