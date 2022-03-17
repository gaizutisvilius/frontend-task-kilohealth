import React from 'react';

// MUI
import { Box, Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const StickyBar = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '56px',
        background: (theme) => theme.palette.secondary.main,
        zIndex: 2000,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LocalOfferIcon
          sx={{
            width: '20px',
            height: '20px',
            mr: '18px',
            fill: (theme) => theme.palette.primary.contrastText,
          }}
        />
        <Typography
          sx={{
            lineHeight: '20px',
            color: (theme) => theme.palette.primary.contrastText,
            '& span': {
              fontWeight: 600,
            },
          }}
        >
          50% discount only valid for <span>00:15:49</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default StickyBar;
