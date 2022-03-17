import React from 'react';

// MUI
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const BadgeRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '77px',
  height: '24px',
  p: 1,
  background: '#FFE082',
  borderRadius: '6px',
  fontWeight: 700,
  fontSize: '0.75rem',
  color: theme.palette.text.primary,
}));

const Badge = (props) => {
  const { text, ...otherProps } = props;

  return (
    <BadgeRoot {...otherProps}>
      <Typography variant='caption' sx={{ color: 'inherit !important' }}>
        {text}
      </Typography>
    </BadgeRoot>
  );
};

export default Badge;
