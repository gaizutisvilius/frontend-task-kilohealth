import React from 'react';

// MUI
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// Custom components
import Title from '../../Title';
import ProgramPlan from './ProgramPlan';
import ProgramDetails from './ProgramDetails';

const CheckoutProgramSection = (props) => {
  const { title, subtitle = false } = props;

  return (
    <SectionRoot>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: {
            sm: 'center',
            xs: 'flex-start',
          },
          justifyContent: 'center',
          maxWidth: '729px',
          pt: {
            sm: 5,
            xs: 0,
          },
          pb: 6,
          m: '0 auto',
        }}
      >
        {subtitle && (
          <Typography variant='body2' sx={{ span: { fontWeight: 'bold' } }}>
            Over <span>52 147</span> plans ordered.
          </Typography>
        )}
        <Title
          variant='h1'
          text={title}
          sx={{ fontSize: { lg: '2.5rem !important' } }}
        />
        <Grid
          container
          spacing={3}
          sx={{
            mt: {
              sm: 2,
              xs: 0,
            },
          }}
        >
          <Grid item md={6} xs={12}>
            <ProgramPlan />
          </Grid>
          <Grid item md={6} xs={12}>
            <ProgramDetails />
          </Grid>
        </Grid>
      </Box>
    </SectionRoot>
  );
};

const SectionRoot = styled('section')(({ theme }) => ({
  width: '100%',
}));

export default CheckoutProgramSection;
