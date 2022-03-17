import React from 'react';

// MUI
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Custom components
import Title from '../../Title';

// Assets
import AppImage from '../../../assets/images/app.png';

const yogaProgramFeatures = [
  'Each program adapts to your age or fitness level',
  'Mindful way to exercise and get real results',
  'Effective and long-term lasting results',
  'Suited activities that benefit both the mind and body',
  'Low-intensity but highly-effective workouts',
  'Extra attention to muscle, joint and back health',
];

const FAQApp = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Grid
        container
        spacing={5}
        sx={{
          flexDirection: {
            sm: 'row',
            xs: 'column-reverse',
          },
        }}
      >
        <Grid item md={6} xs={12} sx={{ img: { width: '100%' } }}>
          <Title
            variant='h3'
            text='Start your yoga journey now!'
            sx={{ mb: 3 }}
            justifyContent={(theme) =>
              theme.breakpoints.down('sm') && 'flex-start'
            }
          />
          <img src={AppImage} alt='app' />
        </Grid>
        <Grid item md={6} xs={12}>
          <Title
            variant='h3'
            text='Is Positive Yoga right for me?'
            sx={{ mb: 3 }}
            justifyContent='flex-start'
          />
          <Grid container spacing={1}>
            {yogaProgramFeatures.map((feature, i) => (
              <Grid key={i} item md={12} xs={12}>
                <FeaturesBlock>
                  <Box sx={{ mr: 2.25 }}>
                    <CheckCircleOutlineIcon sx={{ fill: '#91B83D' }} />
                  </Box>
                  <Box>
                    <Typography variant='body1' sx={{ fontSize: '0.875rem' }}>
                      {feature}
                    </Typography>
                  </Box>
                </FeaturesBlock>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const FeaturesBlock = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-star',
}));

export default FAQApp;
