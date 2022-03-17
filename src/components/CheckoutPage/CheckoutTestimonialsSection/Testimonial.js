import React from 'react';

// MUI
import { Card, Rating, Typography } from '@mui/material';

const Testimonial = (props) => {
  const { name, age, address, rating, photo, story } = props;

  function highlightProgramName(text) {
    const isMentioned = text.includes('Positive Yoga');

    if (isMentioned) {
      const textWithoutProgramName = text.split('Positive Yoga');
      const programName = text
        .split(' ')
        .filter((word) => word === 'Positive' || word === 'Yoga')
        .join(' ');

      return (
        <Typography sx={{ mt: 2, span: { fontWeight: 'bold' } }}>
          {textWithoutProgramName[0]}
          <span>{programName}</span>
          {textWithoutProgramName[1]}
        </Typography>
      );
    }

    return <Typography sx={{ mt: 2 }}>{text}</Typography>;
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%',
        maxWidth: '319px',
        p: 2,
        borderRadius: '16px',
        boxShadow: (theme) => theme.shadows[22],
      }}
    >
      <Typography variant='h5'>
        {name}, {age}
      </Typography>
      <Typography variant='caption'>{address}</Typography>
      <Rating
        name='read-only'
        value={rating}
        readOnly
        sx={{ my: 2, color: '#FFCC80' }}
      />
      <img src={photo} alt='user' />
      {highlightProgramName(story)}
    </Card>
  );
};

export default Testimonial;
