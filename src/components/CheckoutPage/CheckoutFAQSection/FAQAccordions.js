import React from 'react';

// MUI
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Custom components
import Title from '../../Title';
import CustomButton from '../../CustomButton';

const accordions = [
  {
    summary: 'What happens after I order?',
    details:
      'After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve.',
  },
  {
    summary: 'Where I can access my plan?',
    details:
      "Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase.",
  },
  {
    summary: 'How can I cancel my subscription?',
    details:
      'You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app',
  },
  {
    summary: 'Why this program is paid?',
    details:
      'We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! ',
  },
];

const FAQAccordions = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Title
        variant='h3'
        text='Frequently Asked Questions'
        justifyContent={(theme) => theme.breakpoints.down('sm') && 'flex-start'}
        sx={{
          ml: {
            sm: 'unset',
            xs: '-11%',
          },
        }}
      />
      <Box sx={{ mt: 1, mb: 6 }}>
        <Grid container spacing={1}>
          {accordions.map((accordion, i) => (
            <Grid key={i} item md={12} xs={12}>
              <Accordion
                sx={{
                  background: (theme) => theme.palette.background.default,
                  borderRadius: '12px !important',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Title variant='h5' text={accordion.summary} />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1' sx={{ fontSize: '0.875rem' }}>
                    {accordion.details}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          mb: {
            sm: 0,
            xs: 5,
          },
        }}
      >
        <CustomButton
          text='Get my plan'
          fullWidth
          sx={{
            width: (theme) => theme.breakpoints.up('sm') && '343px',
            height: '56px',
          }}
        />
      </Box>
    </Box>
  );
};

export default FAQAccordions;
