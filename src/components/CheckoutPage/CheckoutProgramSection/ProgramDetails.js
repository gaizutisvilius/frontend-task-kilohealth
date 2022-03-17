import React from 'react';

// MUI
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// Custom components
import Title from '../../Title';

// Assets
import {
  BookCheckImage,
  ShoeImage,
  SmartWatchImage,
  WhistleImage,
  PlanImage,
  ExerciseImage,
  DietImage,
} from '../../../assets/svg';

const programImages = [
  PlanImage,
  ExerciseImage,
  ShoeImage,
  DietImage,
  WhistleImage,
  SmartWatchImage,
  BookCheckImage,
];

const programDetails = [
  {
    title: 'A personalized yoga program',
    subtitle: 'Completely safe and focused on your key goals',
  },
  {
    title: 'Easy & enjoyable yoga workouts for your level',
    subtitle: 'Program adjusts to your level and pace',
  },
  {
    title: 'No special preparation needed',
    subtitle:
      'Perfect for begginners! Requires no special preparation or equipment',
  },
  {
    title: 'Daily motivation & accountability',
    subtitle:
      'Track your progress, develop a healthy routine, reach goals faster',
  },
  {
    title: 'Browse from various yoga challenges',
    subtitle:
      '30 d morning yoga, mindful yoga, back flexibility challenge, and more!',
  },
  {
    title: 'Easy access on any device',
    subtitle: 'Do your yoga anywhere across all types of devices',
  },
  {
    title: 'A complete guide to get started',
    subtitle:
      'Best tips, guidelines, advice, and recommendations for successful practice',
  },
];

const ProgramDetails = (props) => {
  return (
    <Box>
      <Title
        variant='h3'
        text="What's in my program?"
        justifyContent='flex-start'
      />
      <Box
        sx={{
          mt: {
            sm: 6.5,
            xs: 3,
          },
        }}
      >
        <Grid container spacing={1}>
          {programImages.map((Image, i) => (
            <Grid key={i} item md={12} xs={12}>
              <DetailsBlock>
                <Box sx={{ mr: 2 }}>
                  <Image />
                </Box>
                <Box>
                  <Typography variant='h5'>
                    {programDetails[i].title}
                  </Typography>
                  <Typography variant='caption'>
                    {programDetails[i].subtitle}
                  </Typography>
                </Box>
              </DetailsBlock>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const DetailsBlock = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export default ProgramDetails;
