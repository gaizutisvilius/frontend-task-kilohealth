import React from 'react';

// MUI
import { styled } from '@mui/material/styles';
import { Card, Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Custom components
import Badge from '../../Badge';

const ProgramPlanCard = (props) => {
  const {
    index,
    active,
    setActive,
    badge = false,
    badgeContent,
    planType,
    monthlyPrice,
    price,
    priceDiscount,
    billingPeriod,
  } = props;

  return (
    <Card
      variant='outlined'
      sx={{
        cursor: 'pointer',
        position: 'relative',
        width: '100%',
        p: 2,
        fontSize: '0.875rem',
        span: {
          color: (theme) => theme.palette.primary.main,
          fontWeight: 700,
        },
        border: (theme) =>
          active
            ? `2px solid ${theme.palette.primary.main}`
            : `2px solid rgba(0, 0, 0, 0.08)`,
        borderRadius: '16px',
        '&:hover': {
          border: (theme) => `2px solid ${theme.palette.primary.light}`,
        },
      }}
      onClick={() => setActive(index)}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: '7px' }}>
        <Typography variant='h5'>{planType}</Typography>
        {badge && <Badge text={badgeContent} sx={{ ml: 1 }} />}
      </Box>
      <Typography
        variant='h2'
        sx={{
          mb: '4px',
          span: {
            fontSize: '0.875rem',
            fontWeight: '400 !important',
            color: (theme) => `${theme.palette.text.primary} !important`,
          },
        }}
      >
        {`$${monthlyPrice}`}
        <span>/month</span>
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {priceDiscount && (
          <Typography
            variant='body2'
            sx={{ mr: 1, textDecoration: 'line-through' }}
          >
            {`$${priceDiscount}`}
          </Typography>
        )}
        <Typography variant='body2'>
          {price && <span>${price}</span>}
          {` ${billingPeriod}`}
        </Typography>
      </Box>
      <CardAction active={active}>
        {active ? <CheckCircleIcon /> : <CircleIcon />}{' '}
      </CardAction>
    </Card>
  );
};

const CardAction = styled('div')(({ theme, active }) => ({
  position: 'absolute',
  top: '50%',
  right: '18px',
  color: active ? `${theme.palette.primary.light}` : 'rgba(0, 0, 0, 0.08)',
  transform: 'translateY(-50%)',
}));

export default ProgramPlanCard;
