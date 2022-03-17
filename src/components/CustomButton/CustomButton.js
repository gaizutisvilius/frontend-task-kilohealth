import React from 'react';

// MUI
import { Button } from '@mui/material';

const CustomButton = (props) => {
  const { text, ...otherProps } = props;

  return (
    <Button
      size='large'
      color='primary'
      variant='contained'
      sx={{ height: '56px' }}
      {...otherProps}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
